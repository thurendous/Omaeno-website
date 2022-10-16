---
title: 30 Callback
author: thurendous, Polymetis
date: October 16th, 2022
keywords: [solidity, callback]
description: understand callback function through solidity code example
tags:
    - solidity
    - callback
---

`call`は低いレベルの関数で、他のコントラクトとのやり取りをするときに使われる。
これはイーサを送るときに勧められているやり方だが、コントラクトに存在する関数を呼ぶための関数としては勧められていない。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Receiver {
    event Received(address caller, uint amount, string message);

    fallback() external payable {
        emit Received(msg.sender, msg.value, "Fallback was called");
    }

    function foo(string memory _message, uint _x) public payable returns (uint) {
        emit Received(msg.sender, msg.value, _message);

        return _x + 1;
    }
}

contract Caller {
    event Response(bool success, bytes data);

    // contrct Receiverのソースコードがわからなくて、関数名と引数の型だけわかったとする。こんな形でReceiverの関数を呼び出せる
    function testCallFoo(address payable _addr) public payable {
        // You can send ether and specify a custom gas amount
        (bool success, bytes memory data) = _addr.call{value: msg.value, gas: 5000}(
            abi.encodeWithSignature("foo(string,uint256)", "call foo", 123)
        );

        emit Response(success, data);
    }

    // 存在しない関数を呼び出そうとすると、fallback関数が呼ばれることになる
    function testCallDoesNotExist(address _addr) public {
        (bool success, bytes memory data) = _addr.call(
            abi.encodeWithSignature("doesNotExist()")
        );

        emit Response(success, data);
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
