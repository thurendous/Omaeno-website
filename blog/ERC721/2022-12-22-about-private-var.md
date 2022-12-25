---
slug: what-is-ERC721-and-NFT-with-code-explained
title: NFT、ERC721とはなんぞや（コード解説）
authors: [Thurendous, Polymetis]
blogDescription: 'ERC721とはなんぞや'
tags: [ERC721, NFT, solidity]
---

# TL;DR：

-   NFT は非代替性トークンのこと
-   シンプルにいうとデジタル所有権のこと
-   コードで理解しましょう

![](nft-nfts.gif)

BTC や ETH のようなトークンは FT と呼ばれ、代替性トークンのことです。特徴としては、お互いに交換可能で大きな違いはないことです（厳密には違いもありますが、ここではその議論をしない）。また、アート、コレクション、不動産などのようなお互い違いをかなり持っているようなものは非代替性トークンで代表されることがほとんどです。

イーサリアムでは EIP721 が提案されて、ERC721 のスタンダードが形成されました。

# EIP, ERC とは

結論：EIP が ERC を含んでいる

まず、理解しなければならないのは、[ERC721](https://eips.ethereum.org/EIPS/eip-721) です。この２つの間にはなんの関係があるのでしょうか。EIP とは、Ethereum Improvement Proposals のことで、イーサリアムコミュニティが提案したプロトコルなどを改善するための提案のことです。EIP はイーサリアムの中の任意の分野の改善で、例えば新たな機能、ERC、プロトコル改善などがあります。

ERC とは、Ethereum Request For Comment のことで、イーサリアム上の各種アプリケーションのプロトコルとスタンダードのこととなっています。典型的な ERC20, ERC721、あるいは URI のスタンダード ERC67、あるいはウォレットのフォーマット EIP75, EIP85 などがある。

ERC スタンダードはイーサリアムの発展における重要な構成要素で、ERC20, ERC721, ERC223, ERC777 などのスタンダードがイーサリアムのエコシステムに多大な影響を与えていました。

# ERC165

まず ERC165 について理解しましょう。
スマートコントラクトはインターフェースを宣言して他のスマートコントラクトがチェックするためにやっているのが ERC165 のことです。

シンプルにいうと、`ERC165` を通してとあるコントラクトが `ERC721`, `ERC1155` をサポートしているかチェックできるという仕組みです。

```sol
interface IERC165 {
    /**
     * @dev コントラクトが当該スタンダードの`interfaceId`を実装していればtrueを返す
     * 詳細はこちら：https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
     *
     */
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
```

次に実際には ERC721 がどのように `supportsInterface()`を実現したのか見てみましょう。

```sol
function supportsInterface(bytes4 interfaceId) external pure override returns (bool)
    {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }
```

この関数`supportsInterface`は IERC721 あるいは IERC165 の interfaceId が引数として入力された場合に、`true`を返し、そうでない場合は`false`を返します。

# IERC721

`IERC721`の中身を見てみましょう。
`IERC721`は`ERC721`のインターフェーススタンダードのコントラクトで、ERC721 が実現すべき一般的な関数を定義してます。`tokenId`を使って非代替性トークンを代表しています。アプルーブあるいはトランスファに際して、`tokenId`は必ず出番があります。しかし、ERC20 はトランスファにおける数量だけを定義すればよくて、tokenId はありません。

```sol
/**
 * @dev ERC721スタンダードのインターフェース
 */
interface IERC721 is IERC165 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function balanceOf(address owner) external view returns (uint256 balance);

    function ownerOf(uint256 tokenId) external view returns (address owner);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external;

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function approve(address to, uint256 tokenId) external;

    function setApprovalForAll(address operator, bool _approved) external;

    function getApproved(uint256 tokenId) external view returns (address operator);

    function isApprovedForAll(address owner, address operator) external view returns (bool);
}
```

# IERC721 の event

3 つの event を含まれています。`Transfer`、`Approval`は ERC20 にも存在します。

-   `Transfer`: トークントランスファのときに放出。送り元`from`、送り先`to`、`tokenId`。
-   `Approvel`: アプルーブするときに放出。アプルーブする側のアドレス`owner`、アプルーブした先のアドレス`approved`、`tokenId`。
-   `ApprovalForAll`: 一気に大量にアプルーブするときに放出するイベント。アプルーブする側のアドレス`owner`、アプルーブされる側のアドレス`operator`、アプルーブする場合`approved`は true で、逆に権限を剥奪する場合、`approved`は false にする

# IERC721 関数

-   `balanceOf`: とあるアドレスの持っている NFT の数量を返す
-   `ownerOf`: tokenId のオーナーを返す
-   `transferFrom`: 普通のトランスファ、引数は `from` は送り元で、`to` は送り先、`tokenId `も必要
-   `safeTransferFrom`:安全なトランスファ、もし受ける側はコントラクトの場合、`ERC721Receiver`の実装が求められる。引数は送り元の`from`、送り先の`to`、`tokenId`
-   `approve`: 他のアドレスにあなたの NFT を使用する権利を渡す。権利を付与するアドレスは`approve`、そして`tokenId`
-   `getApproved`: `tokenId`がどのアドレスに権限を付与したのか確認する
-   `setApprovalFroAll`: 自分の持っているこのコントラクトのすべての NFT をとあるアドレスに対して全権移譲する
-   `isApprovedForAll`: 全権移譲しているアドレスがあるか確認する
-   safeTransferFrom`: 安全なトランスファ関数のオーバーライド関数、引数に`data`が含まれている

# IERC721Receiver

コントラクトがもし ERC721 の実現をしていない場合、送られてきた NFT はブラックホールに送ったように、永遠に取り出せなくなります。これを防止するために、ERC721 は`safetransferFrom()`関数を実装している。ターゲットコントラクトが`IERCReceiver`インターフェースを実装している場合のみ、ERC721 トークンを受け取ることができます。そうでない場合は`revert`されます。IERC721Receiver インターフェースは一個の`onERC721Receiver()`関数しかありません。

```sol
// ERC721Receiverのインターフェース：　コントラクトはこれを実装して安全なトランスファを受けることができる
interface IERC721Receiver {
    function onERC721Received(
        address operator,
        address from,
        uint tokenId,
        bytes calldata data
    ) external returns (bytes4);
}

```

次に`ERC721`がどうやって`_checkOnERC721Received`を使ってコントラクトが`onERC721Receiver()`関数を実装していることを確認しているのを見てみましょう。

```sol
function _checkOnERC721Received(
        address from,
        address to,
        uint tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            return
                IERC721Receiver(to).onERC721Received(
                    msg.sender,
                    from,
                    tokenId,
                    _data
                ) == IERC721Receiver.onERC721Received.selector;
        } else {
            return true;
        }
    }
```

# IERC721Metadata

IERC721Metadata は ERC721 の拡張インターフェイス。３つの metadata 用関数を用いている。

-   `name()`：トークン名を返す
-   `symbol()`:トークン符号
-   `tokenURI()`:tokenId を使って metadata の url をとってくる。ERC721 特有の関数

```sol
interface Ierc721Metadata is IERC721 {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function tokenURI(uint256 tokenId) external view returns (string memory);
}

```

# ERC721 メインコントラクト

`ERC721` メインコントラクトは `IERC721`, `IERC165`, `IERC721Metadata` のすべての機能を定義した。4 つの状態変数、17 個の関数を含まれている。シンプルに実装されている。詳細はコメントを読んでください。

```sol
// SPDX-License-Identifier: MIT
// by 0xAA
pragma solidity ^0.8.4;

import "./IERC165.sol";
import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./IERC721Metadata.sol";
import "./Address.sol";　// library
import "./String.sol"; // library

contract ERC721 is IERC721, IERC721Metadata{
    using Address for address; // Address libraryを使う（isContractを使うため）
    using Strings for uint256; // String library

    // Token名
    string public override name;
    // Tokenシンボル
    string public override symbol;
    // tokenId -> owner address のマッピング
    mapping(uint => address) private _owners;
    // address -> バランスのマッピング
    mapping(address => uint) private _balances;
    // tokenID -> アプルーブされたアドレスのマッピング
    mapping(uint => address) private _tokenApprovals;
    //  owner -> operatorアドレス -> bool（権限渡した場合はtrue）
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    /**
     * constructor, name, symbolを初期化する
     */
    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
    }

    // ERC165のsupportsInterface関数
    function supportsInterface(bytes4 interfaceId)
        external
        pure
        override
        returns (bool)
    {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId;
    }

    // IERC721のbalanceOf関数、_balancesを使って調べたいアドレスの残高を返す
    function balanceOf(address owner) external view override returns (uint) {
        require(owner != address(0), "owner = zero address");
        return _balances[owner];
    }

    // IERC721のownerOf関数、_owners変数を使ってtokenIdのownerを返す
    function ownerOf(uint tokenId) public view override returns (address owner) {
        owner = _owners[tokenId];
        require(owner != address(0), "token doesn't exist");
    }

    // IERC721のisApprovedForAll、_operatorApprovals変数を
    // 使ってownerがoperatorに権限を移譲したかどうかをチェックする。
    // 権限移譲した場合はtrueを返す
    function isApprovedForAll(address owner, address operator)
        external
        view
        override
        returns (bool)
    {
        return _operatorApprovals[owner][operator];
    }

    // IERC721のsetApprovalForAllを実装。持っているトークンをすべてoperatorに権限を渡す(true),
    // あるいはoperatorの権限を剥奪する(false)。_setApprovalForAll関数を呼び出す。
    function setApprovalForAll(address operator, bool approved) external override {
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    // 实现IERC721的getApproved，利用_tokenApprovals变量查询tokenId的授权地址。
    function getApproved(uint tokenId) external view override returns (address) {
        require(_owners[tokenId] != address(0), "token doesn't exist");
        return _tokenApprovals[tokenId];
    }

    // _approve関数。_tokenApprovalsを書き換えて，toアドレスに tokenIdをいじる権限を渡す。
    // Approvalイベントを放出。
    function _approve(
        address owner,
        address to,
        uint tokenId
    ) private {
        _tokenApprovals[tokenId] = to;
        emit Approval(owner, to, tokenId);
    }

    // IERC721のapprove関数，tokenIdの権限を to アドレスに渡す。
    // 条件：toはownerではないこと，かつmsg.senderはownerあるいはapproveされたアドレス。
    // _approve関数を呼び出す
    function approve(address to, uint tokenId) external override {
        address owner = _owners[tokenId];
        require(
            msg.sender == owner || _operatorApprovals[owner][msg.sender],
            "not owner nor approved for all"
        );
        _approve(owner, to, tokenId);
    }

    //  spenderアドレスがtokenIdを使う権限があるかないかを調べる。（あるのはownerか
    // approveされたかのいずれだ。approveされた場合は通常のapproveあるいは
    // setApprovalForAllの2パターン）
    function _isApprovedOrOwner(
        address owner,
        address spender,
        uint tokenId
    ) private view returns (bool) {
        return (spender == owner ||
            _tokenApprovals[tokenId] == spender ||
            _operatorApprovals[owner][spender]);
    }

    /*
     * トランスファ関数。_balances、_ownerのバランスを調整して tokenId を from から toに
     * トランスファする。同時にTransferイベントを放出。
     * 前提条件:
     * 1. tokenId は from によって所有されている
     * 2. to はゼロアドレスでない
     * 条件を満たさない場合はrevert
     */
    function _transfer(
        address owner,
        address from,
        address to,
        uint tokenId
    ) private {
        require(from == owner, "not owner");
        require(to != address(0), "transfer to the zero address");

        _approve(owner, address(0), tokenId); // トランスファするので権限をリセットする

        _balances[from] -= 1;
        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(from, to, tokenId);
    }

    // IERC721のtransferFrom関数の実装，セーフトランスファではないので、
    // この関数を使うのは推奨されていない。
    function transferFrom(
        address from,
        address to,
        uint tokenId
    ) external override {
        address owner = ownerOf(tokenId);
        require(
            _isApprovedOrOwner(owner, msg.sender, tokenId),
            "not owner nor approved"
        );
        _transfer(owner, from, to, tokenId);
    }

    /**
     * セーフトランスファ，安全にtokenIdをfromからtoへトランスファする。スマートコントラクトが
     * erc721に対応しているかどうかをチェックした上で、トランスファをするので、NFTが永遠に
     * ロックされる実態を回避する。_transfer、_checkOnERC721Received関数を呼び出す。
     * 条件：
     * from はゼロアドレスではない
     * to はゼロアドレスではない
     * tokenId が存在してしかもfromアドレスが所有
     * toがスマートコントラクトの場合、必ずIERC721Receiver-onERC721Receivedをサポートされる
     * ことが求められる
     */
    function _safeTransfer(
        address owner,
        address from,
        address to,
        uint tokenId,
        bytes memory _data
    ) private {
        _transfer(owner, from, to, tokenId);
        require(_checkOnERC721Received(from, to, tokenId, _data), "not ERC721Receiver");
    }

    /**
     * IERC721のsafeTransferFromを実装。セーフトランスファ関数，_safeTransfer関数を呼び出している
     */
    function safeTransferFrom(
        address from,
        address to,
        uint tokenId,
        bytes memory _data
    ) public override {
        address owner = ownerOf(tokenId);
        require(
            _isApprovedOrOwner(owner, msg.sender, tokenId),
            "not owner nor approved"
        );
        _safeTransfer(owner, from, to, tokenId, _data);
    }

    // safeTransferFromのオーバライド関数、引数が違う
    function safeTransferFrom(
        address from,
        address to,
        uint tokenId
    ) external override {
        safeTransferFrom(from, to, tokenId, "");
    }

    /**
     * mint関数。_balances、_ownersのバランスをいじることで、tokenIdをtoへトランスファする。
     * 同時にTransferイベントを放出する。
     * 現在の状態では、誰でもミントできるので、開発者は普通この関数を書き換える
     * 条件:
     * 1. tokenIdがまだ存在しない
     * 2. toはゼロアドレスでない
     */
    function _mint(address to, uint tokenId) internal virtual {
        require(to != address(0), "mint to zero address");
        require(_owners[tokenId] == address(0), "token already minted");

        _balances[to] += 1;
        _owners[tokenId] = to;

        emit Transfer(address(0), to, tokenId);
    }

    // バーン関数，_balances、_owners変数を調整してtokenIdをバーンする。同時にTransferイベントを放出
    // 条件：tokenId存在。
    function _burn(uint tokenId) internal virtual {
        address owner = ownerOf(tokenId);
        require(msg.sender == owner, "not owner of token");

        _approve(owner, address(0), tokenId); // 権限を更新

        _balances[owner] -= 1;
        delete _owners[tokenId];

        emit Transfer(owner, address(0), tokenId);
    }

    // _checkOnERC721Received：IERC721Receiver-onERC721Received関数, 送り先はERC721互換かどうかをチェックするため
    function _checkOnERC721Received(
        address from,
        address to,
        uint tokenId,
        bytes memory _data
    ) private returns (bool) {
        if (to.isContract()) {
            return
                IERC721Receiver(to).onERC721Received(
                    msg.sender,
                    from,
                    tokenId,
                    _data
                ) == IERC721Receiver.onERC721Received.selector;
        } else {
            return true;
        }
    }

    /**
     * IERC721MetadataのtokenURI関数，metadataを返す
     */
    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_owners[tokenId] != address(0), "Token Not Exist");

        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString())) : "";
    }

    /**
     * {tokenURI}のBaseURI。tokenURIはbaseURI、tokenIdをつないでできたもの。
     * 開発者がこの関数を書きかえる
     * 例えばBAYCのbaseURIはipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/
     */
    function _baseURI() internal view virtual returns (string memory) {
        return "";
    }
}

```

# free mint の APE を作ろう

それでは、free mint の APE を作りましょうか。totalSupply を 10000 個にして、mint 関数や baseURI を書き換えるだけで済みます。

baseURI()の設定を BAYS と全く同じようにすることで、BAYC の猿が表示されるはずです。

```sol

// SPDX-License-Identifier: MIT
// by 0xAA
pragma solidity ^0.8.4;

import "./ERC721.sol";

contract OmaenoApe is ERC721{
    uint public MAX_APES = 10000; // 総数

    // コンストラクタ
    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_){
    }

    //BAYCのbaseURIはipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }

    // mint関数
    function mint(address to, uint tokenId) external {
        require(tokenId >= 0 && tokenId < MAX_APES, "tokenId out of range");
        _mint(to, tokenId);
    }
}
```

それでは remix を開いてコードを書きましょう。

# ERC721 を発行しよう

ERC721 スタンダードがあれば、ブロックチェーンにて NFT を発行することは非常にシンプルになります。
今、上記のコードができたので、remix にて発行しましょう。

実際の手順はまたの機会で書きます。

# ERC165 と ERC721

NFT を NFT についてコントロールできないコントラクトへ送付してしまうと、永遠に消失してしまうため、これを防ぐために`ERC721TokenReceiver`インターフェイスの実装が求められます。

```sol
interface ERC721TokenReceiver {
    function onERC721Received(address _operator, address _from, uint256 _tokenId, bytes _data) external returns(bytes4);
}
```

実はこのインターフェイスとは、この `onERC721REceived` 関数のことです。この関数を実装していれば、NFT を処理する能力があるという宣言になります。

**THE END**

![](ethereum-eth.gif)
