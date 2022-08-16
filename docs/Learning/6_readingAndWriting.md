---
title: 5 Read and Write Variables
author: MarkWu, Polymetis
date: August 15, 2022
keywords: [solidity, read, write, variable]
description: reading and writing an variable in solidity
# slug: /reading-and-writing
---

# 状態変数の書き込みや読み込み

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract SimpleStorage {
    // 数字を格納するstate variable(状態変数)を宣言
    uint public num;

    // state variableを変更するにはトランザクションを発行する必要がある（ガス代を払う必要がある）
    function set(uint _num) public {
        num = _num;
    }

    // 読み込みに関してはトランザクション発行の必要はない（ガス代は発生しない）
    function get() public view returns (uint) {
        return num;
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
