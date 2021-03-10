# test_kitties
Trivial ERC 721 Token

Minimum need for spec tests.

Based on
- [A Simple ERC-721 Example](https://medium.com/coinmonks/a-simple-erc-721-example-c3f72b5aa19)
- [CryptoKitties Clone In 20 minutes](https://maksimivanov.com/posts/gradient-coin-tutorial/)


To use
- Install [Ganache](http://truffleframework.com/ganache/)
- Install latest [node (v14.15.5 LTS)](https://nodejs.org/en/)
- Install Truffle
```
npm install -g truffle
```
- Install npm packages
```
cd test_kitties
npm install
```
- Run tests (note: version of solc used is defined in `truffle.js`)
```
truffle test
```


### To export ABI:
- Install Homebrew
- Install Solidity
```bash
brew update
brew upgrade
brew tap ethereum/ethereum
brew install solidity
```
- Generate API and ABI
```bash
solc --optimize --abi --bin "@openzeppelin=$PWD/node_modules/@openzeppelin" contracts/TestKitties.sol -o build --overwrite
```

### Deployed on Rinkeby
Use address `0x7873B0C97742ed12A713bA629f13D180c6C91f95` and [ABI](TestKitties.abi)
