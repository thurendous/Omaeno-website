---
title: 17 View and Pure
author: thurendous, Polymetis
date: September 3, 2022
keywords: [solidity, pure, view]
description: solidity pure and view
# slug: /hello-world
tags:
    - basic
    - view
    - pure
---

-   `view`: blockchain のデータを変更せず、読み込みしている場合
-   `pure`: blockchain のデータを変更あるいは読み込みをしない場合

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract ViewWithPure {
    uint public x = 1;

    // xはブロックチェーンのデータを読み込みしているので、viewを使う
    function addToX(uint y) public view returns (uint) {
        return x + y;
    }

    // i, jともにブロックチェーン外部のデータなので、pureを使う
    function add(uint i, uint j) public pure returns (uint) {
        return i + j;
    }
}
```

:::tip tip

memory 引数の場合も pure をつけることができる。例えば：

```sol
function addWithNum(uint[] memory nums) public pure returns (uint) {
        return nums[1]+2;
    }
```

:::

[Remix](https://remix.ethereum.org/)で試す
