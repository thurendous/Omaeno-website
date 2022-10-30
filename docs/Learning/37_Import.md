---
title: 37 Import
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, import]
description: understand import syntax through solidity code example
tags:
    - solidity
    - import
---

今回は import の使い方についてだ

ローカルなディレクトリーはこのような構造とする。

```
├── Import.sol
└── Foo.sol
```

以下は`Foo.sol`は import される側のファイル

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// struct, error, add関数, Fooコントラクトを持っている
struct Point {
    uint x;
    uint y;
}

error Unauthorized(address caller);

function add(uint x, uint y) pure returns (uint) {
    return x + y;
}

contract Foo {
    string public name = "Foo";
}

```

以下`Import.sol`は import する側のファイル

-   実質`Foo.sol`にある内容が`Import.sol`に書かれているのと同じ

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// ファイルからimport
import "./Foo.sol";

// Foo.solから特別な関数などをimportする
import {Unauthorized, add as func, Point} from "./Foo.sol";

contract Import {
    // Foo.solを使ってコントラクトを作成
    Foo public foo = new Foo();

    // Foo.solで作成したコントラクトのテスト
    function getFooName() public view returns (string memory) {
        return foo.name();
    }
}

```

Github からファイルを import することも可能。openZeppelin もよくこの書き方をしている。

```sol
// https://github.com/owner/repo/blob/branch/path/to/Contract.sol
import "https://github.com/owner/repo/blob/branch/path/to/Contract.sol";

// Example import ECDSA.sol from openzeppelin-contract repo, release-v4.5 branch
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.5/contracts/utils/cryptography/ECDSA.sol";

```

[Remix](https://remix.ethereum.org/)で試す
