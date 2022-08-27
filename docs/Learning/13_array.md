---
title: 13 Array
author: MarkWu, Polymetis
date: August 27, 2022
keywords: [solidity, array]
description: solidity array
# slug: /hello-world
tags:
    - basic
    - array
---

# Array

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Array {
    // 宣言の仕方
    uint[] public anArr;
    uint[] public arr2 = [1, 2, 3];

    // 長さ固定の配列、初期値は全部0
    uint[10] public FixedSizeArray;

    function get(uint i) public view returns (uint) {
        return anArr[i];
    }

    // solidityは全部の配列を返すことができる
    // ガス代が増長するので無限に増加する配列は避けよう
    function getArr() public view returns (uint[] memory) {
        return anArr;
    }

    function push(uint i) public {
        // 配列への追加
        // 配列の長さが一個増える
        anArr.push(i);
    }

    function pop() public {
        // 配列の最後の要素をリムーブする
        // 配列の長さが一個減る
        anArr.pop();
    }

    function getLength() public view returns (uint) {
        return anArr.length;
    }

    function remove(uint index) public {
        // Deleteは配列の長さを変えず全ての要素を初期値に戻すだけで、ここの場合は0
        delete anArr[index];
    }

    function anExample() external {
        // メモリーにおいて配列を作成する
        // 長さが固定な配列のみが宣言可能
        uint[] memory a = new uint[](5);
        // 書き方は慣れていってください
    }
}

```
