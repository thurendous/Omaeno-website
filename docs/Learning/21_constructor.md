---
title: 21 Constructor
author: thurendous, Polymetis
date: September 10, 2022
keywords: [solidity, constructor]
description: solidity constructor
# slug: /hello-world
tags:
    - basic
    - constructor
---

constructor はコントラクトがデプロイされるときに一度だけ走る。

-   状態変数を初期化したいときに使うことが多い

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// Base contract A(constructor内含)
contract A {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}

// Base contract B(constructor内含)
contract B {
    string public text;

    constructor(string memory _text) {
        text = _text;
    }
}

// 親コントラクトを継承したりする場合、constructorの使い方は2パターンある

// ①パラメーターをコントラクトに直接書くパターン
// こちらはハードコーディングしている
contract E is A("Input to X"), B("Input to Y") {

}

contract C is A, B {
    // ②constructorにパラメーターを代入するパターン
    // こちらはデプロイするときに引数として定義
        string public name2;
    string public text2;
    constructor(string memory _name, string memory _text) X(_name) Y(_text) {
        name2 = _name;
        text2 = _text;
    }
}

// constructorが呼ばれる順番はA, B, D
contract D is A, B {
    // constructor()の後ろのA("X was called") B("Y was called")が書かれる順にかかわらず、constructorが呼ばれる順番はA, B, D
    constructor() A("X was called") B("Y was called") {}
}

// constructorが呼ばれる順番はA, B, E
contract E is A, B {
    constructor() B("Y was called") A("X was called") {}
}

```

:::tip tip

一個のファイルにコントラクトは何個あってもいいです。ただし、constructor はコントラクトごとに一個しか書けません。

:::

[Remix](https://remix.ethereum.org/)で試す
