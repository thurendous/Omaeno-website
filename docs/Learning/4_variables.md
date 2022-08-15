---
title: variables
author: MarkWu, Polymetis
date: August 15, 2022
keywords: [solidity, variable]
description: data type of solidity
# slug: /variables
tags:
    - basic
    - variable
---

# 変数

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Variables {
    // ブロックチェーンに保存されるのはstate variables(状態変数)
    string public text = "Hello";
    uint public num = 123;

    function doSomething() public view returns(uint, uint, address){
        // localに宣言された変数はブロックチェーンに保存されず
        uint i = 456;

        // よく使うグローバルな変数の例
        uint timestamp = block.timestamp; // 現在のブロックのタイムスタンプ(時間を意味する)
        address sender = msg.sender; // callerのアドレス（関数を呼び出した人のアドレス）

        return (i, timestamp, sender);
    }
}
```

3 種類の変数タイプがある。

-   ローカル変数
    -   自分で作るもの
    -   関数内で宣言
    -   ブロックチェーンに保存されない
-   状態変数
    -   自分で作るもの
    -   関数の外で宣言される
    -   ブロックチェーンに保存される
-   グローバル変数

    -   従来のプログラミング変数のイメージと異なる
    -   ブロックチェーンに付帯する既存の情報を呼び出せるもの
        -   例:timestamp は UNIX [タイムスタンプのこと](https://url-c.com/tc/)

-   tips
    -   ブロックチェーンにおいては、data の保存は Storage と Memory の 2 種類があり、
    -   ローカル変数は Memory、状態変数は Storage に保存される。
    -   Storage に保存されると永久化されて、Memory は一時的なもの
    -   Storage の情報を変更することは「ブロックチェーンデータの改変」となる。

[Remix](https://remix.ethereum.org/)で試す
