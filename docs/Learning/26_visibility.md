---
title: 26 Visibility
author: thurendous, Polymetis
date: September 30, 2022
keywords: [solidity, visibility, public, internal, external, private]
description: solidity's visibility
# slug: /hello-world
tags:
    - basic
    - visibility
    - public
    - internal
---

関数はアクセスの範囲を定義しなければならない。そのときに出てくるのは visibility だ。
visibility はいわゆる見える範囲を規定するワードであり、以下がある。

-   public:どのコントラクト、アカウントでも呼び出せる
-   private:コントラクト内部から呼び出せる
-   internal:コントラクトあるいは継承したコントラクトから呼び出せる
-   external:外部のコントラクトあるいはアカウントからでしか呼び出せない

```sol


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Base {
    // Privateをつけた関数はコントラクトの内部でしか見えなくなる
    // 継承したとしてもみえない
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Internalをつけた関数は
    // - コントラクト内部から呼び出せる
    // - 継承したコントラクトからも見えて呼び出せる
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure virtual returns (string memory) {
        return internalFunc();
    }

    // Publicをつけた関数を呼び出せるのは
    // - コントラクト内部
    // - 継承したコントラクト
    // - 外部のコントラクトあるいはアカウント
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // Externalをつけた関数を呼び出せるのは
    // - 外部のコントラクトあるいはアカウントのみ
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // これはexternalな関数を呼び出すことになるので、コントラクトはうまくコンパイルされずエラーがでる
    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // 状態変数の場合
    string private privateVar = "my private variable";
    string internal internalVar = "my internal variable";
    string public publicVar = "my public variable";
    // 状態変数はexternalにできないので、以下のコードもエラーがでる
    // string external externalVar = "my external variable";
}

contract Child is Base {
    // 継承したコントラクトはprivateな関数や状態変数へのアクセスができない
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }

    // Internalな関数は継承をした関数においても実行可能
    function testInternalFunc() public pure override returns (string memory) {
        return internalFunc();
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
