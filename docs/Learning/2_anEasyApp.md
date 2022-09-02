---
title: 2 An Easy App
author: thurendous, Polymetis
date: August 11, 2022
keywords: [solidity, app]
description: an easy app
# slug: /an-easy-app
tags:
    - basic
    - first-step
---

# An Easy App

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// コントラクトの宣言
contract Counter {
    // 状態変数の宣言
    uint public count;

    // getter関数の宣言、内部からも外部からも呼べるpublic修飾子をつけた
    function get() public view returns (uint) {
        return count;
    }

    // 変数countに対して-1をする関数inc
    function inc() public {
        count += 1; // = "count = count + 1;"
    }

    // 変数countに対して-1をする関数dec
    function dec() public {
        // This function will fail if count = 0
        count -= 1; // = "count = count - 1;"
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
