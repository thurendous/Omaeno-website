---
title: 22 Inheritance
author: thurendous, Polymetis
date: September 10, 2022
keywords: [solidity, inheritance]
description: solidity inheritance
# slug: /hello-world
tags:
    - basic
    - inheritance
---

ワードの説明：

-   `is`:継承するときに使われて、複数継承も可能
-   `virtual`:オーバーライド（上書き）される可能性がある関数につける
-   `override`:元の関数をオーバーライド（上書き）するときに関数につける

注意：コントラクトの継承については最も親となるコントラクトから最も子供のコントラクトの順にしなければならない

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* 継承の関係図
    A
   / \
  B   C
 / \ /
F  D,E
*/

contract A {
    function foo() public pure virtual returns (string memory) {
        return "A";
    }
}

// isをつけるだけでコントラクトを継承することができる
// この場合：BがAを継承
contract B is A {
    // オーバーライド A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // A.foo()をオーバーライドする
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// 複数のコントラクトを継承できる
// 複数のコントラクトの中で定義されていると、継承の右から検索されていき一番最初にあたったものを使う

contract D is B, C {
    // D.foo() 返り値 "C"
    // CはD, B, Cの中で、親のコントラクトで、しかもisの後ろにおいて一番右側に位置するから返り値は"C"
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() 返り値 "B"
    // BはE, C, Bの中で親のコントラクトで、isの後ろに一番右側に位置するから返り値は"B"
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// コントラクトの継承については左から最も（元となる）親のコントラクトから最も子供のコントラクトの順にしなければならない
// ABの順番を逆転させるとエラーがでる
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
