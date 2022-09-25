---
title: 24 Shadowing Inheritance
author: thurendous, Polymetis
date: September 19, 2022
keywords: [solidity, inheritance]
description: solidity state variable's inheritance
# slug: /hello-world
tags:
    - basic
    - inheritance
    - state variable
---

-   Contract にある状態変数（state variable）を上書きしようとすると、`constructor`を使う。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract A {
    string public name = "Contract A";

    function getName() public view returns (string memory) {
        return name;
    }
}

// Solidity 0.6から変数の上書きができなくなった
// 以下のコードは思ったとおりに機能しない
// contract B is A {
//     string public name = "Contract B";
// }

contract C is A {
    // これが正しい上書きの仕方でconstructorにおいて値を付与して上書きする
    constructor() {
        name = "Contract C";
    }

    // C.getName 返り値は "Contract C"
}

```
