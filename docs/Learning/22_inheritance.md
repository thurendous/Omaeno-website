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

注意：コントラクトの継承については最もベースとなるコントラクトから最も新しく継承したコントラクトの順にしなければならない

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

// isというワードをつけるだけでコントラクトを継承することができる
// この場合：BがAを継承
contract B is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "B";
    }
}

contract C is A {
    // Override A.foo()
    function foo() public pure virtual override returns (string memory) {
        return "C";
    }
}

// Contracts can inherit from multiple parent contracts.
// When a function is called that is defined multiple times in
// different contracts, parent contracts are searched from
// right to left, and in depth-first manner.

contract D is B, C {
    // D.foo() returns "C"
    // since C is the right most parent contract with function foo()
    function foo() public pure override(B, C) returns (string memory) {
        return super.foo();
    }
}

contract E is C, B {
    // E.foo() returns "B"
    // since B is the right most parent contract with function foo()
    function foo() public pure override(C, B) returns (string memory) {
        return super.foo();
    }
}

// Inheritance must be ordered from “most base-like” to “most derived”.
// Swapping the order of A and B will throw a compilation error.
contract F is A, B {
    function foo() public pure override(A, B) returns (string memory) {
        return super.foo();
    }
}
```
