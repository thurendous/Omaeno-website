---
title: 15 Storage, Memory and Calldata
author: thurendous, Polymetis
date: August 28, 2022
keywords: [solidity, storage, memory, calldata]
description: solidity storage, memory and calldata
# slug: /hello-world
tags:
    - basic
    - storage, memory, calldata
---

# Storage, Memory and Calldata

これは他のプログラミング言語にない知識。ブロックチェーンの場合はガス代がかかるので、`storage`, `memory`, `calldata`の使い分けが重要になる。

変数の場合、宣言するときにこの３種類のワードを書くことで明瞭にデータの場所を定義することができる。

-   storage: 状態変数としてブロックチェーンに保存、編集可能
-   memory: 関数の中に存在するメモリに保存される一時的な変数、編集可能
-   calldata: memory と似ていてメモリに一時的に保存される。代入する関数の引数になる。編集不可

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract DataLocations {
    uint[] public arr;
    mapping(uint => address) map;
    struct MyStruct {
        uint foo;
    }
    mapping(uint => MyStruct) myStructs; // NFTででそうな構造

    function f() public {

        // mappingからstructを状態変数へ代入
        MyStruct storage myStruct = myStructs[1];
        // memoryでstructを初期化する
        MyStruct memory myMemStruct = MyStruct(0);
    }

    // 引数にstorageも入れれる
    function _f(
        uint[] storage _arr,
        mapping(uint => address) storage _map,
        MyStruct storage _myStruct
    ) internal {
        // do something with storage variables
    }

    // メモリの変数を返すことができる
    function g(uint[] memory _arr) public returns (uint[] memory) {
         // do something with storage variables
    }

    // calldataの引数が可能
    function h(uint[] calldata _arr) external {
    }
}


```
