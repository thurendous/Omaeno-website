---
title: 30 Fallback
author: thurendous, Polymetis
date: October 7st, 2022
keywords: [solidity, fallback]
description: understand fallback function through solidity code example
tags:
    - basic
    - solidity
    - fallback
---

コントラクトにある`fallback`関数は引数として何もなく、返り値もないような関数である。

この関数が実行されるのは

-   コントラクトに該当する関数がない場合
-   イーサが送られてきて、しかも`receive`関数がなく、あるいは msg.data がある（何かイーサを送るだけでなく、他のデータが含まれる）場合

＊もし`transfer`、`send`で呼ばれると、ガス代の制限は 2300gas になるので、ガス代のかかることはできなくなる。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Fallback {
    event Log(string func, uint gas);

    // fallback関数は必ずexternalをつけること
    fallback() external payable {
        // send / transfer (forwards 2300 gas to this fallback function)
        // call (forwards all of the gas)
        emit Log("fallback", gasleft());
    }

    // receive関数はfallbackの変異種で、msg.dataが空っぽなときに呼ばれる
    receive() external payable {
        emit Log("receive", gasleft());
    }

    // 当該コントラクトの残高を確認する
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}

// fallbackやreceive関数を呼び出すためのもの
contract SendToFallback {
    function transferToFallback(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function callFallback(address payable _to) public payable {
        (bool sent, ) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
