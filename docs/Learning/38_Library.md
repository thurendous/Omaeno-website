---
title: 38 Library
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, library]
description: understand library through solidity code example
tags:
    - solidity
    - library
---

ライブラリはコントラクトと似ているが、イーサを送ることができないし、状態変数も持っていない。

ライブラリの関数が internal な場合は、コントラクトに内蔵されているので、デプロイしなくてもよいが、そう出ない場合はデプロイの必要がある。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

library Math {
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
        // else z = 0 (default value)
    }
}

// library を使う1つ目の方法
contract TestMath {
    function testSquareRoot(uint x) public pure returns (uint) {
        return Math.sqrt(x);
    }
}

// indexに位置する配列の要素を削除するための関数
library Array {
    function remove(uint[] storage arr, uint index) public {
        // 配列最後の要素を移動して、削除する
        require(arr.length > 0, "Can't remove from empty array");
        arr[index] = arr[arr.length - 1];
        arr.pop();
    }
}

// Arrayライブラリをテストするためのコントラクト
contract TestArray {
    using Array for uint[];

    uint[] public arr;

    function testArrayRemove() public {
        for (uint i = 0; i < 3; i++) {
            arr.push(i);
        }

        arr.remove(1);

        assert(arr.length == 2);
        assert(arr[0] == 0);
        assert(arr[1] == 2);
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
