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

以下の例は配列の何番目かの要素をリムーブする関数が入っているコントラクト

-   例：[1, 2, 3] -- remove(1) --> [1, 3, 3] --> [1, 3]

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ArrayRemoveByShifting {
    // [1] -- remove(0) --> [1] --> []

    uint[] public arr;

    // 要素をリムーブする関数本体
    function remove(uint _index) public {
        require(_index < arr.length, "index out of bound"); // _indexが配列の要素の数より小さいことを制限。大きれば"index out of bound"をエラー表示してrevertする

        for (uint i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    // リムーブ関数が正確に機能するかをチェックする関数
    function test() external {
        arr = [1, 2, 3, 4, 5];
        remove(2); // 2番要素をリムーブ
        // [1, 2, 4, 5]
        assert(arr[0] == 1); // 0番要素は1なのか確認
        assert(arr[1] == 2);
        assert(arr[2] == 4);
        assert(arr[3] == 5);
        assert(arr.length == 4); // lengthは4なのか確認

        arr = [1];
        remove(0);
        // []
        assert(arr.length == 0);
    }
}

```

:::info revert とは

revert するということはイーサリアムにおいてトランザクションを実行し終わってなくて途中で fail してすべてがロールバックされることを意味します。

:::
