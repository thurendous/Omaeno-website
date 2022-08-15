---
title: Hello World
author: MarkWu, Polymetis
date: August 11, 2022
keywords: [solidity, hello, world]
description: solidity hello world
# slug: /hello-world
tags:
    - basic
    - first-step
---

```solidity
// SPDX-License-Identifier: MIT // ->　著作権を宣言

// solidity のバージョンを宣言、^の意味は 0.8.13 より上 0.
pragma solidity ^0.8.13;


// コントラクトの宣言、ここでは HelloWorld と命名した
contract HelloWorld {
    //  コントラクトの内容として、greet という状態変数を宣言して初期値として`Hello World`を代入
    string public greet = "Hello World!";
}
```

-   その他
    -   ファイル名もできるだけコントラクト名と同一としたほうがよい
        -   例：今回の場合は`HelloWorld.sol`

[Remix](https://remix.ethereum.org/)で試す
