---
title: 33 Function Selector
author: thurendous, Polymetis
date: October 16th, 2022
keywords: [solidity, function, selector]
description: understand function selector through solidity code example
tags:
    - solidity
    - function
    - selector
---

関数が呼ばれるときに、calldata の一番最初の 4 bytes がどの関数を呼ばれるかを決める。この 4 bytes は関数のセレクタと呼ばれたりする。
例えば、以下の関数はとあるコントラクトアドレス `addr` にある `transfer` 関数を呼ぶためのもの。

```sol
addr.call(abi.encodeWithSignature("transfer(address,uint256)", 0xSomeAddress, 123))

```

最初の 4 bytes が`abi.encodeWithSignature(...)`から返り値として得られて、これが関数セレクタになる。
もしこのセレクタの計算をあなたのローカルで実施すれば、多少ガス代の節約できるのではと思う。

次に、セレクタの計算方法を示す。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract FunctionSelector {
    /*
        "transfer(address,uint256)"
        0xa9059cbb
        "transferFrom(address,address,uint256)"
        0x23b872dd
    */
    function getSelector(string calldata _func) external pure returns (bytes4) {
        return bytes4(keccak256(bytes(_func)));
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
