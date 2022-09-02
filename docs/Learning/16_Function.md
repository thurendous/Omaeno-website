---
title: 15 Function
author: thurendous, Polymetis
date: September 2, 2022
keywords: [solidity, storage, memory, calldata]
description: solidity function
# slug: /hello-world
tags:
    - basic
    - function
---

# Function

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Function {
    // 複数の返り値を持つ関数
    function returnManyValues()
        public
        pure
        returns (
            uint,
            bool,
            uint
        )
    {
        return (6, true, 6);
    }

    // 返り値を予め宣言しておく
    function withReturnedValuesNamed()
        public
        pure
        returns (
            uint num1,
            bool isTrue,
            uint num2
        )
    {
        return (1, true, 2);
    }

    // 帰り値は変数に付与できる。この場合return文は省略可能
    function assignedValues()
        public
        pure
        returns (
            uint num1,
            bool isTrue,
            uint num2
        )
    {
        num1 = 1;
        isTrue = true;
        num2 = 2;
    }

    // 分割代入を使って別の関数の複数の返り値を代入させる
    function destructuringAssignments()
        public
        pure
        returns (
            uint,
            bool,
            uint,
            uint,
            uint
        )
    {
        (uint num1, bool isTrue, uint num2) = returnMany();

        // いらない値は省略できる
        (uint num3, , uint num4) = (4, 5, 6);

        return (num1, b, num2, num3, num4);
    }

    // mappingは関数の引数にできない

    // 配列は関数の引数にできる
    function arrayAsInput(uint[] memory _arr) public {}

    // 配列は関数の返り値にもできる
    uint[] public arr;

    function arrayAsOutput() public view returns (uint[] memory) {
        return arr;
    }
}


```
