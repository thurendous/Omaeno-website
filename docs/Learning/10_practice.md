---
title: 10 Practice
author: MarkWu, Polymetis
date: August 19, 2022
keywords: [solidity, if]
description: solidity conditional statements
# slug: /hello-world
tags:
    - practice
---

# Practice

復習も兼ねてこんなコントラクトを作ってください
以下を remix でデプロイしてみて遊んでください

-   あなたの名前がコントラクト名
-   状態変数は名前、年齢、性別、住所をそれぞれ public で宣言
    -   名前、性別は constant にして初期値を与える。年齢は immutable にする
    -   住所は public のみで宣言
-   Ethereum のアドレス変数 owner を public のみで宣言
-   constructor で年齢は 初期値を与えて、owner にコントラクト作成者のアドレスを保存する
-   住所を変えれる関数を作ってあげる

    -   住所を変更してみる

[Remix](https://remix.ethereum.org/)で作る

## 回答例

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Thurendous {
    string public constant NAME = 'thurendous';
    string public constant GENDER = 'middle';
    uint public immutable AGE;
    string public myAddress;
    address public owner;

    // デプロイする際にconstructorの引数を入れて実行しよう
    constructor(uint _age) {
        owner = msg.sender;
        AGE = _age;
    }

    function changeAddress(string calldata _address) public {
        myAddress = _address;
    }
}
```
