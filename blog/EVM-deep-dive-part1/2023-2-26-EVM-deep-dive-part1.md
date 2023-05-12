---
slug: EVM-deep-dive-part1
title: EVM ディープダイブ - super coder への道 🥷 💻Part 1
authors: [Thurendous]
blogDescription: 'EVM ディープダイブ - super coder への道 🥷 💻Part 1'
tags: [EVM, opcode, Etheruem, blockchain, examples]
---

Hi Hi, nerver give up!

First Principle という言葉を耳にされたことはないだろうか。それは奥深く物事の基礎を理解した上で、よりよい発想を生まれることという概念だ。

スマートコントラクトの世界では、EVM とその周りにあるアルゴリズム、データ構造に関しては、まさにこの First Principle である。Solidity あるいはスマートコントラクトはこの基礎の上に作る構造物なので、EVM のことを理解せずにはよい solidity dev と称するにはまだ早いと言ってよいだろう。

## 基礎：Solidity → Bytecode → Opcode

まず、基礎的な部分について一定程度の知識を有することを前提としている。

-   おさらい：
    -   Bytecode & ABI: バイトコードとは EVM 上で実行可能なコードで、ABI とはこの EVM バイトコードとやり取りができるための interface。
    -   Solidity コードはまずバイトコードへコンパイルしてから、イーサリアムブロックチェーンへ乗せるという流れになる。バイトコードは実は色々なオペコードを意味している。

今回は基本的な solidity コントラクトについてのバイトコードの一部を一緒にみていき、EVM がどのように関数を選んでいるかを見よう。

コントラクトのバイトコードはコントラクトからコンパイルされたもので、コントラクトにはいくつかもの関数があるだろう。

よくある質問は、デプロイした後、EVM はどのようにバイトコードのどの部分を実行すべきかがわかったのかというのがある。

## 1_Storage.sol コントラクト

```solidity
pragma solidity >=0.7.0 <0.9.0;

contract Storage {
	uint256 number;

	function store(uint256 num) public {
		number = num;
	}

	function retrieve() public view returns (uint256) {
		return number;
	}
}
```

今回のコントラクトは上記のものとなる。コントラクトには二個の関数がある。`store()`と `retrieve()`。

runtime のバイトコードは以下の通り：

```
608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033
```

今回フォーカスするのは以下の部分：

```
60003560e01c80632e64cec11461003b5780636057361d1461005957
```

この部分は全体のバイトコードから抜き取ったもの。

関数のセレクタのロジックが含まれている。

言い遅れたが、EVM のオペコードに関しては、[ここ](https://www.ethervm.io/)から確認できる。

オペコードは 1 byte の長さになる。そうすると自然に 256 パターンがあると分ると思う。

しかし、実際には 140 子のオペコードしか存在しない。

以下はバイトコードを関係するオペコードへ変換したもの。

```
60 00                       =   PUSH1 0x00
35                          =   CALLDATALOAD
60 e0                       =   PUSH1 0xe0
1c                          =   SHR
80                          =   DUP1
63 2e64cec1                 =   PUSH4 0x2e64cec1
14                          =   EQ
61 003b                     =   PUSH2 0x003b
57                          =   JUMPI
80                          =   DUP1
63 6057361d                 =   PUSH4 0x6057361d
14                          =   EQ
61 0059                     =   PUSH2 0x0059
57                          =   JUMPI
```

## スマコンの関数呼び出しや Calldata

オペコードへダイブする前に、コントラクトの関数の呼び出しについて復習しよう。

関数の呼び出しの前に、calldata に、関数の署名、そして続いて引数も入れる。

Solidity のコードに表現してもらうと、こうなるだろう。

```solidity
event FunctionCalldata(bytes);
bytes memory functionCalldata = abi.encodeWithSignature('store(uint256)', 10);
emit FunctionCalldata(functionCalldata);
address(storageContract).call(functionCalldata);
```

今回の場合、僕は store 関数を呼び、10 引数として代入したい。

```solidity
0x6057361d000000000000000000000000000000000000000000000000000000000000000a
```

上の長い数字の配列は abi.encodeWithSignature(”store(uint256)”,10)の結果。

関数シグネチャーは４バイトの Keccak ハッシュ値によって定義されている「0x6057361d」。

```
keccak256(“store(uint256)”) →  first 4 bytes = 6057361d

keccak256(“retrieve()”) → first 4 bytes = 2e64cec1
```

先程の calldata を見ると、全部で 36bytes あった。最初の 4bytes: `6057361d`は関数のセレクタ関連で、`store(uint256)`と関係する。

ご自身ではッシュしてみて →[ここ](https://emn178.github.io/online-tools/keccak_256.html)

```
6057361d = function signature (4 bytes)

000000000000000000000000000000000000000000000000000000000000000a = uint256 input (32 bytes)
```

以上、calldata の準備だった。

## オペコード＆スタック

それでは、EVM レベルへダイブしていこう。スタックについて理解しておく必要がある。わからない場合は[これ](https://www.youtube.com/watch?v=FNZ5o9S9prU)を見て。

先程のオペコードはこれ：

```
60 00                       =   PUSH1 0x00
35                          =   CALLDATALOAD
60 e0                       =   PUSH1 0xe0
1c                          =   SHR
80                          =   DUP1
63 2e64cec1                 =   PUSH4 0x2e64cec1
14                          =   EQ
61 003b                     =   PUSH2 0x003b
57                          =   JUMPI
80                          =   DUP1
63 6057361d                 =   PUSH4 0x6057361d
14                          =   EQ
61 0059                     =   PUSH2 0x0059
57                          =   JUMPI
```

PUSH1 は 1byte のデータをスタックへ入れることを意味する。そうすると、スタックはこうなる

```
PUSH1 0x00    | 0 |
```

続いて CALLDATALOAD は最初の stack(0)の値をポップさせる。この 0 値を input として使用し、offset として使う。スタックアイテムのサイズは 32bytes なのに対し、今回の calldata は 36bytes になっている。プッシュする値は msg.data[i : i+32]で、i は今回の input 値となる。これは毎回プッシュする値が 32bytes になることを保証できる。同時に、どの部分にもアクセルできる。

今回の場合、offset はなかったので、32bytes の calldata の値をスタックに push した。さきほど用意した calldata はこれ。やっと出番がきた。

`0x6057361d000000000000000000000000000000000000000000000000000000000000000a`。

というのは、最後の`0000000a`が除外された 32bytes が今回の入力となる。

```
CALLDATALOAD    | 0x6057361d0...00 |
```

次に PUSH1 を使って hex value の 0xe0 をスタックに入れる。これは十進数だと 224。

```
PUSH1 0xe0      |       224        |
				| 0x6057361d0...00 |
```

SHR を使ってライトシフトさせる。今回は最初のアイテムである 224 を取り出し、input として扱う。スタックにある二番目のアイテムをどれくらい右へライトシフトさせるかを定義している。256 - 244 = 32 bit とわかるように、最後には 4bytes のセレクタが call stack に残る。

```
SHR    | 0x6057361d |
```

DUP1 を使ってスタックの一番上の値をコピーする。

```
DUP1    | 0x6057361d |
		| 0x6057361d |
```

PUSH4 を使って 4byte の関数のシグネチャーの`retrieve()` (0x2e64cec1) をスタックにプッシュする。

```
PUSH4 0x2e64cec1    | 0x2e64cec1 |
					| 0x6057361d |
					| 0x6057361d |
```

EQ は二個の値をスタックから出し、イコールなのかどうかをチェックする。もしイコールなら 1（true） をスタックにプッシュ、そうでない場合は 0（false） をプッシュする。

```
EQ    		|      0     |
			| 0x6057361d |
```

次に PUSH2 を使って二個の値をプッシュ。（0x003b, 十進数だと 59）

ここでは、59 が出たのはプログラムカウンターがバイトコードに次の実行コマンドはどこにあるのかを確認しているから。この 59 は retrieve()がスタート地点は 59 を意味している。

```
PUSH2 0x003b    |     59     |
				|      0     |
				| 0x6057361d |
```

JUMPI は”jump if”を意味する。二個の値をポップさせ、一個目の値は 59 で、二個目は 0。二個目の値は bool 値でこの jump を実行すべきかを確定している。1 = true, 0 = false。

もし true の場合、プログラムカウンターはアップデートされ実行はそちらへ jump する。今回は false なので、スキップ。

```
JUMPI    | 0x6057361d |
```

DUP1 again

```
DUP1    | 0x6057361d |
        | 0x6057361d |
```

PUSH4 は 4byte の値をスタックにプッシュする

```
PUSH4 0x6057361d    | 0x6057361d |
					| 0x6057361d |
					| 0x6057361d |
```

また EQ して、今回は true なので。シグネチャーが合った。

```
EQ    |      1     |
	  | 0x6057361d |
```

JUMPI、今回は true なんで jump を実行する。プログラムカウンターは 89 で、バイトコードの違う場所へ移動。

```
PUSH2 0x0059    |     89     |
				|      1     |
				| 0x6057361d |
```

この場所に JUMPDEST オペコードがある。これがないと失敗する。

```
JUMPI    | 0x6057361d |
```

そこで終わり。これでオペコードの実行は`store(uint156)`の場所へ移動できた。

今回は二個の関数しかないものの、たとえ 20 個の関数があったとしても、プロセスは一緒。

この[リンク](https://www.evm.codes/playground?unit=Wei&callData=0x6057361d000000000000000000000000000000000000000000000000000000000000000a&codeType=Mnemonic&code=%27%210%7E0KCALLDATALOAD%7E2z2qw%21E0%7E3KSHR%7E5z2qwDUP1%7E6%28X4_2E64CEC1%7E7KEQ%7E12z5qwX2_3B%7E13%28*I%7E16z3qwDUP1%7E17KX4_6057361D%7E18KEQ%7E23z5qwX2_59%7E24K*I%7E27z3qwkY+wX30_0%7E28KwZGV59z31q%211%7E60+%7BG%7DW%7DKwkYwX26_0%7E62z2qKZstore%7Buint256V89z27q%210+ZContinueW.KK%27%7E+ZOffset+z+%7Bprevious+instruFoccupies+w%5Cnq%29s%7DwkZThes-ar-just+paddingNenabl-usNgetN_+0xZ%2F%2F+Yprogram+counter+59+%26+89XPUSHW+funFexecution...V%7D%29codew*DEST%7EN+to%28wwGretrieve%7BFction+-e+*JUMP%29+byte%28+K%21X1_%01%21%28%29*-FGKNVWXYZ_kqwz%7E_&fork=merge)は非常におすすめ。触ってみると吉。

EVM のスタック・メモリ・ストレージをシミュレートしてくれる。

## Reference

[EVM Deep Dives: The Path to Shadowy Super Coder 🥷 💻 - Part 1](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy)
