---
title: 27 Payable
author: thurendous, Polymetis
date: October 1st, 2022
keywords: [solidity, Payable]
description: solidity's Payable keyword
tags:
    - basic
    - payable
---

payable として宣言された関数、アドレスは native token(イーサリアムの場合はイーサ)の受信ができ、コントラクトに保存できるようになる

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Payable {
    // Payableをつけたアドレスはイーサを受け取れる
    address payable public owner;

    // Payableをつけたconstructorも同様にイーサを受け取れる
    constructor() payable {
        owner = payable(msg.sender);
    }

    // イーサをコントラクトにデポジットするための関数
    // 関数を呼び出すとともに、イーサを送付すると
    // コントラクトのイーサのバランスが増加する
    function deposit() public payable {}

    // 関数を呼び出すとともにイーサを送付すると
    // エラーになる。なぜなら、payableのキーワードがないから
    function notPayable() public {}

    // コントラクトからイーサを引き出す用の関数
    function withdraw() public {
        // コントラクトにあるイーサを変数に保存し
        uint amount = address(this).balance;

        // すべてのイーサをオーナーへ送金
        // オーナーがイーサの送金先のため、見ての通りpayableというワードがつけられている
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    // イーサを_toアドレスへ送付するための関数
    // 見ての通り、引数である_toアドレスはpayableがつけられている
    function transfer(address payable _to, uint _amount) public {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
    }
}

```
