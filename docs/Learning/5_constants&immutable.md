---
title: Data Type
author: MarkWu, Polymetis
date: August 15, 2022
keywords: [solidity, constants, immutable]
description: constants and immutable variables of solidity
# slug: /constants-immutable-variables
tags:
    - basic
    - constants
    - immutable
---

# Constants

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Constants {
    // constantな変数は大文字で書くのが原則
    address public constant MY_ADDRESS = 0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc;
    uint public constant MY_UINT = 123;
}

```

-   constants とは変更不可な変数のこと。値がハードコーディングされており、ガスコストを削減できる

    -   イメージはコントラクトそのものに書き込んでいるので、一回初期化したら書き換えできない。
    -   [constants でない変数は、ブロックチェーン上に Storage などに書き込まれ、編集も可能である](https://developer.mozilla.org/en)

-   tips
    -   constants は宣言するタイミングで初期値を与えないといけない

:::tip tip

constants は宣言するタイミングで初期値を与えないといけない

:::
<br/>
<br/>

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Immutable {
    // immutable変数は大文字で書くのが原則
    address public immutable MY_ADDRESS;
    uint public immutable MY_UINT;

    constructor(uint _myUint) {
        // immutableだから値を付与できる
        MY_ADDRESS = msg.sender;
        MY_UINT = _myUint;
    }
}
```

-   constants と同様で書き換えができない変数だが、constructor によって初期化が可能になったもの

-   tips
    -   constructor は contract が作成されるときに一度だけ呼ばれる関数
    -   python や javascript の場合に constructor が class にあるのはご存知だろう。Solidity では contract は class みたいに理解してもよいかもしれない

[Remix](https://remix.ethereum.org/)で試す
