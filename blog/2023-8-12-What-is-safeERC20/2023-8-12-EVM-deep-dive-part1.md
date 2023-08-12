---
slug: What-is-SafeERC20
title: SafeERC20とは
authors: [Thurendous]
blogDescription: 'Foundryの使い方入門'
tags: [Etheruem, blockchain, Foundry]
---

Hello! Everybody!

# `SafeERC20` の使い方 - What is and how to use `SafeERC20`

OpenZeppelin の SafeERC20 というコントラクトがあります。このコントラクトの趣旨は、ERC20 トークンには基準があるものの、基準に沿っていない有名なトークンがあるからです。例えば、BNB や USDT は bool 値を返さない transfer 関数を持っています。このようなトークンを扱うときに、SafeERC20 を使うことで、bool 値を返さない関数を使っても、失敗した場合には revert することができます。

# じゃ正確に使うには？

SafeERC20 の使用方法はよく誤解されることがあります。

SafeERC20 は、トークンを安全にするために使用する ERC20 の拡張ではありません（OpenZeppelin の ERC20 はすでに安全ですがｗ）。他人の ERC20 トークンとのやり取りを安全にするための補助機能です。

この補助機能が行うことは、

-   ERC20 操作のブール値の戻り値をチェックし、失敗した場合にトランザクションを revert させます。
-   同時に、ブール値の戻り値を持たない非標準の ERC20 トークンもサポートします。
-   さらに、[攻撃](https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729) を緩和するために、承認額を増減させるための補助機能も提供します。

例として、トークンとやり取りする必要がある契約を作成しましょう。それは、人々が一定の価格でトークンを販売できるようにし、後で購入者がそれらから購入できるようにするものです。いくつかのトークンの転送を実行する必要があるため、それらに SafeERC20 を使用します。IERC20 の型の値で安全な操作を使用できるように、行「using SafeERC20 for IERC20」に注意してください。例：tradingToken.safeTransferFrom。

```solidity
contract FixedPriceMarket {
    using SafeERC20 for IERC20;

    IERC20 tradingToken = 0x1234...;
    uint256 price = 128;

    mapping (address => uint256) selling;

    function sell(uint256 tokenValue) {
        tradingToken.safeTransferFrom(msg.sender, this, tokenValue);
        selling[msg.sender] = selling[msg.sender].add(tokenValue);
    }

    function buy(address seller, uint256 tokenValue) {
        require(msg.value == tokenValue.mul(price));
        selling[seller] = selling[seller].sub(tokenValue);
        tradingToken.safeTransfer(msg.sender, tokenValue);
        seller.transfer(msg.value);
    }
}
```

## Reference

[OpenZeppelin Forum](https://forum.openzeppelin.com/t/safeerc20-tokentimelock-wrappers/396)
[SafeERC20 について](https://zenn.dev/retocrooman/articles/20768619a313ae)
