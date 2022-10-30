---
title: 43 Gas Saving
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, gas, optimization]
description: understand gas optimization through solidity code example
tags:
    - solidity
    - gas
    - saving
    - optimization
---

Gas 節約の基本：

-   memory を calldata に置き換える
-   状態変数を memory へ保存する
-   ループの計算に i++の代わりに++i を使う
-   配列要素を cashe する
-   Short circuiting
    -   `&&`や`||`を使う
    -   この場合、例えば`f(x) || g(y)`という表現は `f(x)` が `true` の場合は右辺は評価されず run しないので、重い処理は右側に置くことが効率的になる

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// gas golf
contract GasGolf {
    // start - 50908 gas
    // use calldata - 49163 gas
    // load state variables to memory - 48952 gas
    // short circuit - 48634 gas
    // loop increments - 48244 gas
    // cache array length - 48209 gas
    // load array elements to memory - 48047 gas
    // uncheck i overflow/underflow - 47309 gas
    // 努力して3000程度の改善

    uint public total;

    // start - not gas optimized
    // function sumIfEvenAndLessThan99(uint[] memory nums) external {
    //     for (uint i = 0; i < nums.length; i += 1) {
    //         bool isEven = nums[i] % 2 == 0;
    //         bool isLessThan99 = nums[i] < 99;
    //         if (isEven && isLessThan99) {
    //             total += nums[i];
    //         }
    //     }
    // }

    // gas optimized
    // [1, 2, 3, 4, 5, 100]
    function sumIfEvenAndLessThan99(uint[] calldata nums) external { // memory を calldata に置き換える
        uint _total = total; // 状態変数を memory へ保存する
        uint len = nums.length;

        for (uint i = 0; i < len; ) {
            uint num = nums[i]; // 配列要素を cashe する
            if (num % 2 == 0 && num < 99) { // short circuiting
                _total += num;
            }
            unchecked {
                ++i; // i++: not good, ++i: good
            }
        }

        total = _total;
    }
}

```

You can read more about this [here](https://medium.com/@t.tak/how-to-reduce-gas-cost-in-solidity-f2e5321e0395#9dac).

[Remix](https://remix.ethereum.org/)で試す
