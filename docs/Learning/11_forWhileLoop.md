---
title: 11 for and while loop
author: MarkWu, Polymetis
date: August 25, 2022
keywords: [solidity, while]
description: solidity while loop
# slug: /hello-world
tags:
    - basic
    - while
---

# for and while loop

for loop あるいは while loop は使える。無限ループを作ると必ず fail してすべてが revert されるので気をつけて

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Loop {
    // 状態変数
    uint public num;

    function loop() public returns(uint,uint) {
        // for loopのこと
        for (uint i; i < 10; i++) {
            if (i == 3) {
                // 後ろのコードは全部飛ばして次のループへ
                continue;
                num++;
            }
            if (i == 5) {
                num++;
                // ループを脱出する
                break;
            }
        }

        // while loopのこと
        uint j;
        while (j < 10) {
            j++; // 10となる
        }
        return (num,j); // 1, 10
    }
}

```

[Remix](https://remix.ethereum.org/)で作る
