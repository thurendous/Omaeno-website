---
title: Hello World
author: thurendous
date: August 11, 2022
keywords: [solidity, hello, world]
description: solidity hello world
---

<!-- ---
title: Title for search engines; can be different from the actual heading
description: A short description of this page
image: a thumbnail image to be shown in social media cards
keywords: [keywords, describing, the main topics]
--- -->

# Hello World

```solidity
// SPDX-License-Identifier: MIT ->　SPDX…の行：慣行として著作権を宣言
pragma solidity ^0.8.13;

contract HelloWorld {
    string public greet = "Hello World!";
}
```

-   `// SPDX-License-Identifier: MIT`
    -   慣行として著作権を宣言
-   `pragma solidity ^0.8.13;`
    -   solidity のバージョンを宣言、^の意味は 0.8.13 より上 0.9.0 より下のバージョン
-   `contract HelloWorld`
    -   コントラクトの宣言、ここでは HelloWorld と命名した
-   `string public greet = "Hello World!";`
    -   コントラクトの内容として、greet という状態変数を宣言して初期値として`Hello World`を代入
-   その他アドバイス
    -   ファイル名もできるだけコントラクト名と同一としたほうがよい
        -   例：今回の場合は`HelloWorld.sol`

:::danger Take care
Example: This action is dangerous
:::

[Remix](https://remix.ethereum.org/)にて試す
