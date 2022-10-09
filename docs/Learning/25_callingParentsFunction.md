---
title: 25 Calling Parents' Function
author: thurendous, Polymetis
date: September 29, 2022
keywords: [solidity, parents, call]
description: solidity's inherited functions calling sequence
# slug: /hello-world
tags:
    - basic
    - call
    - parents
---

-   親コントラクトの関数はそのまま呼ぶか、super キーワードを使って呼ぶという方法がある
-   super を使うことで、直近の継承した親コントラクトの同じ名前の関数が全部呼ばれる

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

/* 継承関係図
   A
 /  \
B   C
 \ /
  D
*/

contract A {
    // これはイベントで、関数から放出することが可能
    // トランザクションのログとして記録される
    // 関数の呼ばれることを追跡することに関して有効になる
    // →これについてはフロントエンドの方でやることが多いのでそちらをやると理解されるだろう
    event Log(string message);

    function foo() public virtual {
        emit Log("A.foo called");
    }

    function bar() public virtual {
        emit Log("A.bar called");
    }
}

contract B is A {
    function foo() public virtual override {
        emit Log("B.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("B.bar called");
        super.bar();
    }
}

contract C is A {
    function foo() public virtual override {
        emit Log("C.foo called");
        A.foo();
    }

    function bar() public virtual override {
        emit Log("C.bar called");
        super.bar();
    }
}

contract D is B, C {
    // Try:
    // - D.foo()をコールして結果をみてみよう
    //   DがA、B、Cを継承しているけど、C、Aだけが呼ばれた
    // - D.bar()をコールして結果をみてみよう
    //   C、B、Aの順番で呼ばれた
    //   B、Cはsuperを2回呼ばれたのに、Aが呼ばれたのは一回だけ

    function foo() public override(B, C) {
        super.foo();
    }

    function bar() public override(B, C) {
        super.bar();
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
