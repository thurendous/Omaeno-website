---
title: 1 Ether Wallet
author: thurendous, Polymetis
date: Otcober 30th, 2022
keywords: [solidity, wallet]
description: solidity ether wallet
# slug: /hello-world
tags:
    - advanced solidity
    - app
    - wallet
    - ether
---

簡単なウォレットを作る

-   誰でもウォレットへイーサを入金できる
-   owner のみが出金できる

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherWallet {
    // owner
    address payable public owner;

    // ownerをdeployerに設定しておく
    constructor() {
        owner = payable(msg.sender);
    }

    // etherを受け取るreceive関数
    receive() external payable {}

    // withdraw関数、ownerのみ呼べる
    function withdraw(uint _amount) external {
        require(msg.sender == owner, "caller is not owner");
        payable(msg.sender).transfer(_amount);
    }

    // wallet balanceを見る用
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
