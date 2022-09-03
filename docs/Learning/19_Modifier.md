---
title: 19 Modifier
author: thurendous, Polymetis
date: September 3, 2022
keywords: [solidity, modifier]
description: solidity error
# slug: /hello-world
tags:
    - basic
    - modifier
---

Modifier は非常に多用されるので、なれるといいでしょう。以下のケースにおいて使われることがある。

-   アクセス権の制限
-   条件の検証
-   re-entrency attack を防ぐ

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// modifierの使い方について簡単に例を使って説明
contract Modifier {
    address public owner;
    uint public x = 10;
    bool public locked;

    constructor() {
        // デプロイしたアドレスをオーナーとする
        owner = msg.sender;
    }

    // オーナーだけに権限を与えるためのmodifier
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        // アンダーバーの部分はmodifierを使う関数にあるコードを実行するために書かれている
        _;
    }

    // modifierは引数を入れることも可能
    // ここではaddressがゼロアドレスでないことをチェックしている
    modifier validAddress(address _addr) {
        require(_addr != address(0), "Not valid address");
        _;
    }

    // ここでは2つのmodifierが使われている
    function transferOwnership(address _newOwner) public onlyOwner validAddress(_newOwner) {
        owner = _newOwner;
    }

    // ここでは関数の実行中にもう一度呼ばれることを防ぐために、ロックをかけている→re-entrency attackの対策
    modifier noReentrancy() {
        require(!locked, "No reentrancy");

        locked = true;
        _;
        locked = false;
    }

    function decrement(uint i) public noReentrancy {
        x -= i;

        if (i > 1) {
            decrement(i - 1);
        }
    }
}

```

:::info Zero Address

Ethereum に[Zero Address](https://etherscan.io/address/0x0000000000000000000000000000000000000000)というのがあります。
先ず Zero Address の用途は、Token を Burn できることです。
Address の生成に関しては秘密鍵 → 公開鍵 →Address という順番です。その逆方向の生成はできません。Zero Address において、アドレスが分かったとしても、秘密鍵を生成出来る確率は 2 の 256 乗分の 1 です。これは、今分かっている宇宙空間の中で 1 つの原子を特定する確率に相当し、既存のコンピューターサイエンスではどうにもならないスケールです。つまり、よっぽどな技術進歩がない限り、一度 Zero Address に入れられた Token は永遠に引き出せなくなります。
従って、zero address あるいはその周辺の 0x.....01, 0x...02, 0x....dead はブラックホールと呼ばれている。

:::

[Remix](https://remix.ethereum.org/)で試す
