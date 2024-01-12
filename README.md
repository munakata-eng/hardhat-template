# HardhatSample
## はじめにやること
- `.env.sample`をコピーして`.env`ファイルを作成
- 必要な情報を記入
- ウォレットは開発用に新規にアカウントを作成することを強く推奨！
  - 新規に作成した場合は、テスト用のガス代を入れておくこと
- Gitコミットするときには`.env`の内容が含まれていないことを必ず確認すること！

（最悪ウォレットが自在に操られちゃいます！）

## 各種コマンド

### Test
```shell
REPORT_GAS=true npx hardhat test --network hardhat
```

### Compile
```shell
npx hardhat compile --show-stack-traces
```

### Deploy

```shell
npx hardhat run scripts/deploy-erc1155.ts --network [network]
```
※ `[network]`の欄は以下のいずれかが入る


```
goerli
sepolia
mainnet
polygon
hardhat（仮想環境。チェーンに乗ることはない）
```

### Verify

```shell
npx hardhat verify --network [Network] [Address]
```

## Contract Address

### Polygon
- ERC1155:[0xE84D41f0E2483535F5FD421145872f0525DBbB28](https://polygonscan.com/address/0xE84D41f0E2483535F5FD421145872f0525DBbB28#code)

### Mainnet
- ERC1155:[0xC10112c375A37da99E3294C9A8325D1c8BA247da](https://etherscan.io/address/0xC10112c375A37da99E3294C9A8325D1c8BA247da#code)

### Goerli
- ERC1155:[0x1Aa9c9cd522a15e880c799C502f5F461456A0BF0](https://goerli.etherscan.io/address/0x1Aa9c9cd522a15e880c799C502f5F461456A0BF0#code)

### Sepolia
- ERC1155:[0xaE6e5E609D095f11dB402FD2D46569150aa5f982](https://sepolia.etherscan.io/address/0xaE6e5E609D095f11dB402FD2D46569150aa5f982#code)
