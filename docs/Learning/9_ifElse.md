---
title: 9 If and Else
author: MarkWu, Polymetis
date: August 19, 2022
keywords: [solidity, if]
description: solidity conditional statements
# slug: /hello-world
tags:
    - if
    - else
---

# 条件分岐

条件分岐の書き方もできる

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract IfElse {
    function foo(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 20) {
            return 1;
        } else {
            return 2;
        }
    }

    function ternary(uint x) public pure returns (uint) {
        return x < 10 ? 1 : 2;
        // 以下と同義：
        // if (x < 10) {
        //     return 1;
        // }
        // return 2;
    }
}
```

関数`tenary(uint x)`は[三項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)を使っている
