---
title: 29 Sending Ether - transfer, call, send
author: thurendous, Polymetis
date: October 1st, 2022
keywords: [solidity, send, transfer, call, send ether]
description: understand methods to sending ether through solidity code example
tags:
    - basic
    - solidity
    - send ether
    - call
    - transfer
    - send
---

Ether を送りたい、どうしたらよいか？
3 つの方法がある

-   transfer (2300 gas が含まれ、エラーを返す)
-   send (2300 gas が含まれ bool 値を返す)
-   call (gas を設定でき、bool 値を返す)

Ether もどうやってもらうか？
コントラクトがイーサを受け取れるようにするには、少なくとも以下の関数のいずれかを持っていないといけない

-   `receive() external payable`
-   `fallback() external payable`

`msg.data`が空っぽな場合は `receive()`関数が呼ばれ、それ以外の場合は `fallback()`関数が呼ばれる

おすすめのメソッドはどれか？
2019 年以降、`re-entrancy`対策をとった`call`のメソッドが一番おすすめだという。

`re-entrency`の対策としては

-   他のコントラクトを呼び出す前に、状態の変更を実行してからにする
-   `re-entrancy`対策の修飾子を使うこと

```sol

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ReceiveEther {
    /*
    fallback() or receive()のどちらが呼ばれるかを簡単にまとめたチャート

           send Ether
               |
         msg.dataは空っぽ?
              / \
            yes  no
            /     \
receive()あるか?  fallback()
         /   \
        yes   no
        /      \
    receive()   fallback()
    */

    // イーサをもらったときにmsg.dataが空っぽな場合、呼ばれる関数
    receive() external payable {}

    // msg.dataは空っぽではない場合、Fallback関数が呼ばれる。
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

contract SendEther {
    function sendViaTransfer(address payable _to) public payable {
        // この関数はイーサを送るメソッドとしておすすめではなくなった
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        // bool値を返して、trueは成功でfalseは失敗
        // この関数はイーサを送るメソッドとしておすすめではなくなった
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        // bool値を返して、trueは成功でfalseは失敗
        // この関数はイーサを送るメソッドとしておすすめになる
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}

```
