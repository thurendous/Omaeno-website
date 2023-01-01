---
title: 5 タイムロッカー(Timelocker)
author: thurendous, Polymetis
date: January 1th, 2023
keywords: [solidity, timelock]
description: solidity ERC1155
# slug: /hello-world
tags:
    - advanced solidity
    - ERC1155
    - NFT
    - FT
---

作った後気づいたんですが、ライセンスがビジネスライセンスなので、もしかして使えないのかも。ただ、大体時効が２年間なので、2018 年のコントラクトなのかなとも思うので、使える可能性もあります。要調査だな。
[こちらのサイト](https://qiita.com/0xfffffff7/items/efbb65521d7708f2db7d)によると、ビジネスの商利用不可だな。厳しい。

```sol
// SPDX-License-Identifier: BSD-3-Clause
pragma solidity ^0.8.4;

contract Timelock{
    // events
    // トランザクションのキャンセルevent
    event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint executeTime);
    // トランザクションの実行event
    event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint executeTime);
    // トランザクションの作成、列に入れるevent
    event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint executeTime);
    // 管理者のアドレス変更event
    event NewAdmin(address indexed newAdmin);

    // 状態変数(storage)
    address public admin; // 管理者のアドレス
    uint public constant GRACE_PERIOD = 7 days; // トランザクションの有効期限、期限をすぎると無効になる
    uint public delay; // トランザクションのロック期間
    mapping (bytes32 => bool) public queuedTransactions; // txHash -> boolのこと、タイムロッカーの列に入っている全てのトランザクション

    // 管理者限定のmodifier定義
    modifier onlyOwner() {
        require(msg.sender == admin, "Timelock: Caller not admin");
        _;
    }

    // onlyTimelock modifier
    modifier onlyTimelock() {
        require(msg.sender == address(this), "Timelock: Caller not Timelock");
        _;
    }

    /**
     * @dev コンストラクタ，管理者アドレス、ロック期間を初期化する
     */
    constructor(uint delay_) {
        delay = delay_;
        admin = msg.sender;
    }

    /**
     * @dev 管理者アドレレスの変更、トランザクション発行したのはタイムロッカーコントラクトでなければならない
     */
    function changeAdmin(address newAdmin) public onlyTimelock {
        admin = newAdmin;

        emit NewAdmin(newAdmin);
    }

    /**
     * @dev トランザクションを作成し、列に入れる
     * @param target: ターゲットのコントラクトアドレス
     * @param value: 送るイーサの量
     * @param signature: 呼び出す関数のシグネチャー
     * @param data: call data，引数などの情報が入っている
     * @param executeTime: 実行するブロックのタイムスタンプ
     *
     * 満たす条件：executeTime は 現在のブロックのタイムスタンプ + delay
     */
    function queueTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public onlyOwner returns (bytes32) {
        // check：実行する時間が上記の条件を満たしていること
        require(executeTime >= getBlockTimestamp() + delay, "Timelock::queueTransaction: Estimated execution block must satisfy delay.");
        // トランザクションハッシュ値の計算
        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);
        // トランザクションを並ぶ列に入れる
        queuedTransactions[txHash] = true;

        // eventを吐く
        emit QueueTransaction(txHash, target, value, signature, data, executeTime);
        return txHash;
    }

    /**
     * @dev 特定のトランザクションを取り消す
     *
     * 満たす条件：トランザクションはタイムロッカーの並ぶ列に入っていること
     */
    function cancelTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public onlyOwner{
        // トランザクションハッシュ値の計算
        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);
        // check:トランザクションはタイムロッカーの並ぶ列に入っていること
        require(queuedTransactions[txHash], "Timelock::cancelTransaction: Transaction hasn't been queued.");
        // トランザクションを並ぶ列から排除
        queuedTransactions[txHash] = false;

        // eventを吐く
        emit CancelTransaction(txHash, target, value, signature, data, executeTime);
    }

    /**
     * @dev 特定のトランザクションを実行させる
     *
     * 満たす条件：
     * 1. トランザクションが並ぶ列に入っていること
     * 2. トランザクション事項の期間の条件を満たすこと
     * 3. トランザクションの期限が過ぎていないこと
     */
    function executeTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public payable onlyOwner returns (bytes memory) {
        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);
        // check：トランザクションが並ぶ列に入っていること
        require(queuedTransactions[txHash], "Timelock::executeTransaction: Transaction hasn't been queued.");
        // check：トランザクション事項の期間の条件を満たすこと
        require(getBlockTimestamp() >= executeTime, "Timelock::executeTransaction: Transaction hasn't surpassed time lock.");
        // check：トランザクションの期限が過ぎていないこと
       require(getBlockTimestamp() <= executeTime + GRACE_PERIOD, "Timelock::executeTransaction: Transaction is stale.");
        // トランザクションを並ぶ列から排除
        queuedTransactions[txHash] = false;

        // call用のdataを取得
        bytes memory callData;
        if (bytes(signature).length == 0) {
            callData = data;
        } else {
            // call dataを作成、すでにあるのを上書きする（関数のシグネチャー、引数などの情報を利用）
            callData = abi.encodePacked(bytes4(keccak256(bytes(signature))), data);
        }
        // callを使って関数を呼び出す
        (bool success, bytes memory returnData) = target.call{value: value}(callData);
        require(success, "Timelock::executeTransaction: Transaction execution reverted.");

        // eventを吐く
        emit ExecuteTransaction(txHash, target, value, signature, data, executeTime);

        return returnData;
    }

    /**
     * @dev 現在のブロックのタイムスタンプを取得
     */
    function getBlockTimestamp() public view returns (uint) {
        return block.timestamp;
    }

    /**
     * @dev トランザクションのハッシュ値の計算をする関数
     */
    function getTxHash(
        address target,
        uint value,
        string memory signature,
        bytes memory data,
        uint executeTime
    ) public pure returns (bytes32) {
        return keccak256(abi.encode(target, value, signature, data, executeTime));
    }
}

```
