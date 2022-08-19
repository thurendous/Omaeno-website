---
title: 7 Unit of Ethereum(ether and wei)
author: MarkWu, Polymetis
date: August 15, 2022
keywords: [solidity, ether, gawei, wei]
description: unit of Ethereum(ether and wei)
# slug: /ether-and-wei
---

# Ether and Wei

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherUnits {
    uint public oneWei = 1 wei;
    // 1wei = 1
    bool public isOneWei = 1 wei == 1;

    uint public oneEther = 1 gwei;
    // 1Ether = 10^9 wei
    bool public isOneEther = 1 ether == 1e18;

    uint public oneGwei = 1 ether;
    // 1Gwei = 10^9 wei
    bool public isOneGwei = 1 ether == 1e9;
}
```

-   1 分間が 60 秒であるように、1Ether = 1\*10^18 wei
-   1 gwei = 1\*10^9
-   1wei = 1 なので、数字の単位は wei

[Remix](https://remix.ethereum.org/)で試す
