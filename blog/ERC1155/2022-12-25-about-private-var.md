---
slug: what-is-ERC1155-with-code-explained
title: ERC1155とはなんぞや（コード解説）
authors: [Thurendous, Polymetis]
blogDescription: 'ERC1155とはなんぞや'
tags: [ERC1155, ERC721, NFT, FT, solidity]
---

![BYAC](whatiserc1155.gif)

# TL;DR

-   ERC721 は一種の NFT に対応しているのに対し、ERC1155 は複数の NFT に対応しているイメージです。
-   ERC1155 の ERC721 との違い
    -   token id は種類を規定し、id ごとに amount という数量を定義した
    -   バッチ処理を実装した
-   今回は ERC1155 のコード解説をした

# EIP1155

ERC20 にしろ ERC721 にしろ、コントラクトごとに一種のコインにしか対応していないです。例えば、我々がポケモンのゲームを作ろうとすると、ERC21 あるいは ERC721 を使うと装備ごとにコントラクトをデプロイしないと行けないことになります。一千種類のアイテムがあるとすると、一千個のコントラクトを作らなければなりません。これはとんでもないことになってしまいます。課題を解決すく、イーサリアムの [EIP1155](https://eips.ethereum.org/EIPS/eip-1155) では、一個のコントラクトに複数の FT あるいは NFT を含めることにしました。特に GameFi のケースでは非常に有用です。

シンプルに言うと、ERC1155 は前に紹介した NFT の token スタンダード ERC721 と似ている：ERC721 では、token ごとに`tokenId`を持っており、この id がユニークです。`tokenId`は一個の token を代表している。それに対して、ERC1155 の場合は、token ごとに id がユニークだが、id ごとに数量が定義されている。これで、複数の種類の token は同じコントラクト内で管理することができる様になりました。

種類ごとに URI が存在していて、matadata を保存しています。ERC721 の URI と類似するが、以下のように、ERC1155 のメタデータインターフェイスのコントラクト：

```sol
/**
 * @dev ERC1155のオプションインターフェイス、URI()でmetadataを返す
 */
interface IERC1155MetadataURI is IERC1155 {
    /**
     * @dev idのURIを返す
     */
    function uri(uint256 id) external view returns (string memory);
```

では、どのようにトークンは FT か NFT を区別するのか？答え簡単だ、id の数量が 1 の場合ですと、これは NFT であり、ERC721 と似ている。もし id に対応する token の数量が 1 より大きい場合、それは FT となる。同じ id を共有しているので、ERC20 に類似します。

# IERC1155 インターフェイス

ERC1155 インターフェイスは EIP1155 の実現すべき機能を定義しています。その中で、4 つのイベントと 6 個の関数を定義しています。ERC721 との違いとしては、ERC1155 は複数の種類の token を含まれます。また、バッチトランスファ、バッチバランスチェックの機能が追加されました。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/AmazingAng/WTF-Solidity/blob/main/40_ERC1155/IERC1155.sol";

/**
 * @dev ERC1155のインターフェイス、EIP1155で求められた機能を定義
 * 詳細：https://eips.ethereum.org/EIPS/eip-1155[EIP].
 */
interface IERC1155 is IERC165 {
    /**
     * @dev 単一な種類のtokenのトランスファイベント
     * `value`個の`id`種類のtokenが`operator`によって`from`から`to`へトランスファ
     */
    event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value);

    /**
     * @dev バッチトランスファイベント
     * ids, valuesはトランスファするtokenの種類、数量の配列
     */
    event TransferBatch(
        address indexed operator,
        address indexed from,
        address indexed to,
        uint256[] ids,
        uint256[] values
    );

    /**
     * @dev バッチアプルーブ
     * `account`がすべての権限を`operator`に移譲するときに放出
     */
    event ApprovalForAll(address indexed account, address indexed operator, bool approved);

    /**
     * @dev `id`のtokenのURIが変更となったとき、放出。`value`は新たなURI
     */
    event URI(string value, uint256 indexed id);

    /**
     * @dev バランスを返す，`account`が持っている`id`のtokenの残高を返す
     */
    function balanceOf(address account, uint256 id) external view returns (uint256);

    /**
     * @dev バッチで複数バランスを返す。`accounts`の配列と`ids`配列のlengthがイコールでないといけない
     */
    function balanceOfBatch(address[] calldata accounts, uint256[] calldata ids)
        external
        view
        returns (uint256[] memory);

    /**
     * @dev バッチで複数アプルーブ，callerのtokenの権限を`operator`に渡す
     * {ApprovalForAll}イベントを放出
     */
    function setApprovalForAll(address operator, bool approved) external;

    /**
     * @dev バッチでアプルーブをチェックし、boolを返す。`operator`が`account`によってアプルーブされた場合，`true`を返す
     */
    function isApprovedForAll(address account, address operator) external view returns (bool);

    /**
     * @dev セーフトランスファ、`amount`数量の`id`種類のtoken
     * {TransferSingle}イベントを放出
     * 条件：
     * - callerがownerではない場合、権限もっていないと使えない
     * - `from`は十分なtokenをもっている
     * - 送り先がコントラクトの場合，`IERC1155Receiver`の`onERC1155Received`関数を実装していないと通らない
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes calldata data
    ) external;

    /**
     * @dev バッチセーフトランスファ
     * {TransferBatch}イベントを放出
     * 条件：
     * - `ids`、`amounts`のlengthが同じ
     * - 送り先がコントラクトの場合，`IERC1155Receiver`の`onERC1155Received`関数を実装していないと通らない
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] calldata ids,
        uint256[] calldata amounts,
        bytes calldata data
    ) external;
}

```

# ERC1155 のイベント

-   `TransferSingle` event: 単一な種類のトランスファイベント、トランスファが起きたときに放出
-   `TransferBatch` event: バッチトークントランスファのイベント、バッチのトランスファが起きたときに放出
-   `ApprovalForAll` event: バッチアプルーブのイベント、バッチアプルーブが起きたときに放出
-   `URI` event: metadata のアドレス変更のイベント、`uri`変更時に放出

# IERC1155

-   `balanceOf()`: 単一な種類の残高をチェックする。`account`の持っている`id`種類の token のバランス
-   `balanceOfBatch()`: 多種類のバランスをチェック。チェックする`accounts`が`ids`との length が同じである必要がある
-   `setApprovalForAll()`: バッチアプルーブ、caller の token を operator に権限を移譲する
-   `isApprovalForAll()`: バッチアプルーブの情報をチェックする。`operator`が`account`によって権限をもらっている場合は`true`を返す
-   `safeTransferFrom()`: セーフな単一の token のトランスファ。`amount`数量の`id`種類の token を`from`から、`to`へ送る。`to`がコントラクトの場合、`onERC1155BatchReceived()`関数の実装があるかをチェックされる。

# ERC1155 を受け取るために、用意するコントラクトの形

`ERC721`と同じように、NFT を送ってロックされてしまうことを避けるために、`ERC1155`は受け取る側のコントラクトに`IERC1155Receiver`コントラクトを継承し、2 つの関数を実装しなければならない。

-   `onERC1155Recieved()`: 単一な種類の token を受け取るための関数。ERC1155 のセーフトランスファである`safeTransferFrom`関数からのトランスファを受けるためには、自分自身の selector である`0xf23a6e61`を返す
-   `onERC1155BatchReceived()`: 複数種類の token を受け取る用の関数。`ERC1155`のセーフトランスファ`safeBatchTransferFrom`からのトランスファを受け取るために、自分自身で selector`0xbc197c81`を返す必要がある。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/AmazingAng/WTFSolidity/blob/main/34_ERC721/IERC165.sol";

/**
 * @dev ERC1155を受け取るためのコントラクト、ERC1155のtokenを受け取るにはこれを実装しないといけない
 */
interface IERC1155Receiver is IERC165 {
    /**
     * @dev ERC1155の`safeTransferFrom`のトランスファを受ける
     * 0xf23a6e61 あるいは `bytes4(keccak256("onERC1155Received(address,address,uint256,uint256,bytes)"))`を返す
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external returns (bytes4);

    /**
     * @dev ERC1155の`safeBatchTransferFrom`を受ける
     *  0xbc197c81 あるいは `bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))`を返す
     */
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external returns (bytes4);
}
```

# ERC1155 のメインコントラクト

メインコントラクトは`IERC1155`のインターフェイス規定の関数を実装しました。また、単一な種類/複数の種類の token のミント、バーン関数も実装しました。

## 状態変数は４つ

-   `name`: token 名
-   `symbol`: token シンボル
-   `_balances`: token バランスのマッピング。`id`の owner のアドレスのバランスを記録
-   `_operatorApprovals`: バッチでアプルーブをするためのマッピング。残高を持っているアドレスのアプルーブ状態を記録

## ERC1155 関数

全部で 16 個の関数を持っています。 もちろん、`ERC1155`規定の関数を実装しています。

-   `constructor`: 引数は name, symbol
-   `supportsInterface()`: `ERC165`スタンダードを実現、support するインターフェイスを返す。他のコントラクトがチェックする用に準備する
-   `balanceOf()`: `IERC1166`の残高をチェックする関数。`ERC721`と違うのは、引数は`account`及び`id`。
-   `balanceOfBatch()`: バッチで複数のバランスを返す関数
-   `setApprovalForAll()`: バッチで複数のアプルーブをする関数。`ApprovalForAll`イベントを放出する
-   `isApprovedForAll()`: 全部の権限を持っているアドレスなのかの確認をする関数。
-   `safeTransferFrom()`: 単一な種類の token のトランスファをする関数。`TransferSingle`イベントを放出。`ERC721`と違うのは、引数は`from`, `to`, `id`以外にも、`amount`というのが必要となる。
-   `safeBatchTransferFrom()`: 複数種類の token をトランスファする関数。`TransferBatch`を放出。
-   `_mint()`: 一種類の token を鋳造
-   `_mintBatch()`: 複数種類の token を鋳
-   `_burn()`: 一種類の token を burn する
-   `_burBatch()`: 複数種類の token を burn する
-   `doSafeTransferAcceptanceCheck()`: 一種類の token のトランスファのセーフチェック。`safeTransferFrom()`によって使われる。`onERC1155received()`関数を実装しているかをチェックする。
-   `uri()`: `ERC1155`の`id`の種類の metadata のリンクを返す。`ERC721`の`tokenURI`と似ている。
-   `baseURI()`: `baseURI`を返す。uri は`baseURI`、`id`を接続するので、通常は開発者が書き換える必要がある。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC1155.sol";
import "./IERC1155Receiver.sol";
import "./IERC1155MetadataURI.sol";
import "https://github.com/AmazingAng/WTFSolidity/blob/main/34_ERC721/Address.sol";
import "https://github.com/AmazingAng/WTFSolidity/blob/main/34_ERC721/String.sol";
import "https://github.com/AmazingAng/WTFSolidity/blob/main/34_ERC721/IERC165.sol";

/**
 * @dev ERC1155スタンダードのimplementation
 * 詳細はhttps://eips.ethereum.org/EIPS/eip-1155
 */
contract ERC1155 is IERC165, IERC1155, IERC1155MetadataURI {
    using Address for address; // library Address
    using Strings for uint256; // library Strings
    // Token名
    string public name;
    // Tokenシンボル
    string public symbol;
    // token種類のid → account → balances のマッピング、残高を記録する用
    mapping(uint256 => mapping(address => uint256)) private _balances;
    // address → adderss の全権移譲の記録をするマッピング
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    /**
     * コンストラクタ、初期化の値`name` 、`symbol`
     */
    constructor(string memory name_, string memory symbol_) {
        name = name_;
        symbol = symbol_;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC1155).interfaceId ||
            interfaceId == type(IERC1155MetadataURI).interfaceId ||
            interfaceId == type(IERC165).interfaceId;
    }

    /**
     * @dev バランスを返す関数、IERC1155のbalanceOf。accountのid種類のtoken数を返す
     */
    function balanceOf(address account, uint256 id) public view virtual override returns (uint256) {
        require(account != address(0), "ERC1155: address zero is not a valid owner");
        return _balances[id][account];
    }

    /**
     * @dev 複数のバランスを返す
     * 条件:
     * - `accounts` 、 `ids` のlengthが同じでなければならない.
     */
    function balanceOfBatch(address[] memory accounts, uint256[] memory ids)
        public view virtual override
        returns (uint256[] memory)
    {
        require(accounts.length == ids.length, "ERC1155: accounts and ids length mismatch");
        uint256[] memory batchBalances = new uint256[](accounts.length);
        for (uint256 i = 0; i < accounts.length; ++i) {
            batchBalances[i] = balanceOf(accounts[i], ids[i]);
        }
        return batchBalances;
    }

    /**
     * @dev 複数のアプルーブをする関数。callerはoperatorに全権移譲をする
     * {ApprovalForAll}オベントを放出
     * 条件：msg.sender != operator
     */
    function setApprovalForAll(address operator, bool approved) public virtual override {
        require(msg.sender != operator, "ERC1155: setting approval status for self");
        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    /**
     * @dev バッチ確認、複数
     */
    function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {
        return _operatorApprovals[account][operator];
    }

    /**
     * @dev セーフトランスファ，`amount`数量の`id`tokenを`from`から`to`へ送る関数
     *  {TransferSingle} イベントを放出
     * 条件：
     * - to ゼロアドレスでないこと
     * - fromアドレスは十分なtoken数を持っており、callerは権限を持っていること
     * - to がスマートコントラクトの場合、IERC1155Receiver-onERC1155Receivedをサポートしていること
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public virtual override {
        address operator = msg.sender;
        // ownerか、権限をもらっているかのチェック
        require(
            from == operator || isApprovedForAll(from, operator),
            "ERC1155: caller is not token owner nor approved"
        );
        require(to != address(0), "ERC1155: transfer to the zero address");
        // fromは十分なtoken数を持っているかチェック
        uint256 fromBalance = _balances[id][from];
        require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");
        // バランスを更新
        unchecked {
            _balances[id][from] = fromBalance - amount;
        }
        _balances[id][to] += amount;
        // イベント放出
        emit TransferSingle(operator, from, to, id, amount);
        // セーフなトランスファのチェック
        _doSafeTransferAcceptanceCheck(operator, from, to, id, amount, data);
    }

    /**
     * @dev バッチで複数のトランスファ，`amounts`という数量の配列、`ids`というtoke種類の
     * 配列を使って`from`から`to`へ送る
     *  {TransferSingle} イベント
     * 条件:
     * - to ゼロアドレスでない
     * - fromアドレスは十分なtoken数を持っており、callerは権限を持っていること
     * - to がスマートコントラクトの場合、IERC1155Receiver-onERC1155Receivedをサポートしていること
     * - ids、amountsの配列のlengthが同じである
     */
    function safeBatchTransferFrom(
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public virtual override {
        address operator = msg.sender;
        // ownerか、権限をもらっているかのチェック
        require(
            from == operator || isApprovedForAll(from, operator),
            "ERC1155: caller is not token owner nor approved"
        );
        // 配列の長さが一緒である
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");
        // ゼロアドレスでないこと
        require(to != address(0), "ERC1155: transfer to the zero address");

        // for loopでバランスを更新
        for (uint256 i = 0; i < ids.length; ++i) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            uint256 fromBalance = _balances[id][from];
            require(fromBalance >= amount, "ERC1155: insufficient balance for transfer");
            unchecked {
                _balances[id][from] = fromBalance - amount;
            }
            _balances[id][to] += amount;
        }

        emit TransferBatch(operator, from, to, ids, amounts);
        // セーフなコントラクトのチェック
        _doSafeBatchTransferAcceptanceCheck(operator, from, to, ids, amounts, data);
    }

    /**
     * @dev mint鋳造関数
     *  {TransferSingle} イベントを放出
     */
    function _mint(
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) internal virtual {
        require(to != address(0), "ERC1155: mint to the zero address");

        address operator = msg.sender;

        _balances[id][to] += amount;
        emit TransferSingle(operator, address(0), to, id, amount);

        _doSafeTransferAcceptanceCheck(operator, address(0), to, id, amount, data);
    }

    /**
     * @dev バッチで鋳造
     * 释放 {TransferBatch} 事件.
     */
    function _mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) internal virtual {
        require(to != address(0), "ERC1155: mint to the zero address");
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");

        address operator = msg.sender;

        for (uint256 i = 0; i < ids.length; i++) {
            _balances[ids[i]][to] += amounts[i];
        }

        emit TransferBatch(operator, address(0), to, ids, amounts);

        _doSafeBatchTransferAcceptanceCheck(operator, address(0), to, ids, amounts, data);
    }

    /**
     * @dev バーン関数
     */
    function _burn(
        address from,
        uint256 id,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC1155: burn from the zero address");

        address operator = msg.sender;

        uint256 fromBalance = _balances[id][from];
        require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");
        unchecked {
            _balances[id][from] = fromBalance - amount;
        }

        emit TransferSingle(operator, from, address(0), id, amount);
    }

    /**
     * @dev バーン関数：複数を同時に実行
     */
    function _burnBatch(
        address from,
        uint256[] memory ids,
        uint256[] memory amounts
    ) internal virtual {
        require(from != address(0), "ERC1155: burn from the zero address");
        require(ids.length == amounts.length, "ERC1155: ids and amounts length mismatch");

        address operator = msg.sender;

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 id = ids[i];
            uint256 amount = amounts[i];

            uint256 fromBalance = _balances[id][from];
            require(fromBalance >= amount, "ERC1155: burn amount exceeds balance");
            unchecked {
                _balances[id][from] = fromBalance - amount;
            }
        }

        emit TransferBatch(operator, from, address(0), ids, amounts);
    }

    // @dev ERC1155のセーフトランスファのチェック
    function _doSafeTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) private {
        if (to.isContract()) {
            try IERC1155Receiver(to).onERC1155Received(operator, from, id, amount, data) returns (bytes4 response) {
                if (response != IERC1155Receiver.onERC1155Received.selector) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non-ERC1155Receiver implementer");
            }
        }
    }

    // @dev ERC1155の複数セーフトランスファのチェック
    function _doSafeBatchTransferAcceptanceCheck(
        address operator,
        address from,
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) private {
        if (to.isContract()) {
            try IERC1155Receiver(to).onERC1155BatchReceived(operator, from, ids, amounts, data) returns (
                bytes4 response
            ) {
                if (response != IERC1155Receiver.onERC1155BatchReceived.selector) {
                    revert("ERC1155: ERC1155Receiver rejected tokens");
                }
            } catch Error(string memory reason) {
                revert(reason);
            } catch {
                revert("ERC1155: transfer to non-ERC1155Receiver implementer");
            }
        }
    }

    /**
     * @dev ERC1155のidのuriを返す、metadata、ERC721のtokenURIに同じ
     */
    function uri(uint256 id) public view virtual override returns (string memory) {
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, id.toString())) : "";
    }

    /**
     * {uri}のBaseURIを返す，uriはbaseURI、tokenIdをつないだもの
     */
    function _baseURI() internal view virtual returns (string memory) {
        return "";
    }
}

```

# remix で作成

今回 remix で作るのは ERC1155 版の BAYC。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./ERC1155.sol";

contract BAYC1155 is ERC1155{
uint256 constant MAX_ID = 10000;
// コンストラクタ
constructor() ERC1155("BAYC1155", "BAYC1155"){
}

    //BAYCのbaseURIはこれ：ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/
    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/";
    }

    // ミント関数
    function mint(address to, uint256 id, uint256 amount) external {
        // id は10,000を超えてはならない
        require(id < MAX_ID, "id overflow");
        _mint(to, id, amount, "");
    }

    // バッチでミント
    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts) external {
        // id は10,000を超えてはならない
        for (uint256 i = 0; i < ids.length; i++) {
            require(ids[i] < MAX_ID, "id overflow");
        }
        _mintBatch(to, ids, amounts, "");
    }

}

```

実際の remix については、また今度の機会に書きますので、今回は割愛。

# 最後に

今回は`ERC1155`について学習しました。いかがでしょうか。このスタンダードは同じコントラクトに複数の NFT や FT の共存を許したコントラクトを可能にしたので、個人的には大きなステップだと思っています。また、BYAC の改造をして無理やり`ERC1155`にしました。ほんじゃ、またね。

**THE END**

![](yay-yas.gif)
