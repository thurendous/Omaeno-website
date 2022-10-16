---
title: 32 Delegatecall
author: thurendous, Polymetis
date: October 16th, 2022
keywords: [solidity, delegatecall]
description: understand delegatecall function through solidity code example
tags:
    - solidity
    - delegatecall
---

-   `delegatecall`は低いレベル（よりマシン語に近い）の関数で`call`と似ている。
-   以下の例では、コントラクト A が`delegatecall`を使って B のコードを実行すると、`call`と違うのは、コンテキストを維持することができる。（この場合は A の msg.sender, msg.value や storage になる）
-   つまり、B のロジックコードを使って A の状態管理をすることができることを意味する

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// このコントラクトをまずデプロイする
contract B {
    // NOTE: ストレージの構成はAと同じでなければならない
    uint public num;
    address public sender;
    uint public value;

    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}

contract A {
    uint public num;
    address public sender;
    uint public value;

    function setVars(address _contract, uint _num) public payable {
        // この関数を呼ぶと、Bの状態は変更なしで、Aの状態だけが変更される
        (bool success, bytes memory data) = _contract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
