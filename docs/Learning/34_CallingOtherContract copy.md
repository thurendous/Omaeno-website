---
title: 34 Calling Other Contract
author: thurendous, Polymetis
date: October 16th, 2022
keywords: [solidity, function, selector]
description: understand calling other function through solidity code example
tags:
    - solidity
    - call
    - function
---

-   コントラクトが他のコントラクトを呼び出すには２パターンがある
    -   一番簡単な方法：そのまま呼ぶ → A.foo(x, y, z)
    -   低いレベルの呼び出し → あまりお勧めではない

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Callee { // 呼ばれる方
    uint public x;
    uint public value;

    function setX(uint _x) public returns (uint) {
        x = _x;
        return x;
    }

    function setXandSendEther(uint _x) public payable returns (uint, uint) {
        x = _x;
        value = msg.value;

        return (x, value);
    }
}

contract Caller { // 呼ぶ方
    function setX(Callee _callee, uint _x) public {
        uint x = _callee.setX(_x);
    }

    function setXFromAddress(address _addr, uint _x) public {
        Callee callee = Callee(_addr);
        callee.setX(_x);
    }

    function setXandSendEther(Callee _callee, uint _x) public payable {
        (uint x, uint value) = _callee.setXandSendEther{value: msg.value}(_x);
    }
}


```

[Remix](https://remix.ethereum.org/)で試す
