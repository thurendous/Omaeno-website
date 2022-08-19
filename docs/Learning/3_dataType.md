---
title: 3 Data Type
author: MarkWu, Polymetis
date: August 15, 2022
keywords: [solidity, data, type]
description: data type of solidity
# slug: /data-type
tags:
    - basic
    - datatype
---

# 基本的な変数の型

Solidiy にある基本的な変数の型について紹介

-   bool
-   uint
-   int
-   address

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Primitives {
    // bool値を宣言し、初期値trueを付与
    bool public boo = true;

    /*
    uintは符号なしの数（正の整数及び0）を意味する。

    値の範囲：
        uint8: 0 ~ 2 ^ 8 - 1
        uint16: 0 ~ 2 ^ 16 - 1
        ...
        uint256: 0 ~ 2 ^ 256 - 1
    */

    uint8 public u8 = 12;
    uint public u = 1234; // uintの後ろに何も書かないのはuint256と同じ
    uint public u256 = 156;

    /*
    int型は負の値の付与もok
    uintと同じように、int8 ~ int256までがある

    値の範囲：
    int256: -2 ^ 255 ~ 2 ^ 255 - 1
    int128: -2 ^ 127 ~ 2 ^ 127 - 1
    */
    int8 public i8 = -1;
    int public i256 = 456;
    int public i = -123; // intの後ろに何も書かないのはint256と同じ

    // 最大値、最小値の書き方
    int public minInt = type(int).min; // -2 ^ 255
    int public maxInt = type(int).max; // 2 ^ 255 - 1

    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

    /*
    変数型のbyteは、バイトのシーケンスを意味する。
    solidityには2種類のバイトの変数型がある。
    - 固定長のバイトの配列: bytes1など
    - 可変長のバイトの配列: bytes or byte[]
    */
    bytes1 a = 0xb5; //  [10110101]
    bytes1 b = 0x56; //  [01010110]

    // 初期値
    // 初期値を付与されていない場合でも初期値はある
    bool public defaultBoo; // 初期値はfalse
    uint public defaultUint; // 0
    int public defaultInt; // 0
    address public defaultAddr; // 0x0000000000000000000000000000000000000000
}
```

[Remix](https://remix.ethereum.org/)で試す
