# ERC721 To tranfer NFTs from Sepolia To Amoy using fxPortal

This project demostrate a bridge, that can be used to transfer digital assets like NFTs from Georli Network to Mumbai Network using fxPortal.

## Description

This project is used to demonstrate the purpose of `fxPortal Bridge` and how it can be used to transfer digital assets i.e. NFTs from Ethereum chain to Polygon Chain. To make this project scalable, `ERC721` is used.

## Getting Started

### Installing

First of all, after cloning this repository you have to install all necessary dependencies.

- Use `npm i` to install all necessary dependencies.
- Create `.env` file and paste your `PRIVATE_KEY` there.
- Replace `walletAddress` and `tokenAddress` with your public addresses.

### Executing program

You have to run the scripts to make this project work.

- First of all, you need to deploy this contract.

```
$ npx hardhat run scripts/deploy.js --network sepolia
```

This command will deploy your contract and will give you a address. Paste the address in other scripts.

- You'll need to mint the NFTs then.

```
$ npx hardhat run scripts/mint.js --network sepolia
```

Replace `CIDs` and `prompt` according to your NFTs.

- You can run given command to make `promptDescription` function.

```
$ npx hardhat run scripts/getPrompt.js --network sepolia
```

- You will have to run approveDeposit script to Approve and Deposit the NFTs to fxPortal.

```
 $ npx hardhat run scripts/approveDeposit.js --network sepolia
```

- After 20-30mins these NFTs will get transfered to the `Amoy Testnet`, you can check balance of your wallet by running this command.

```
 $ npx hardhat run scripts/getBalance.js --network amoy
```

## Help

Before running these commands you need `Sepolia ETH` and `MATIC` tokens in your account. You can use `faucets` to claim them.

## Authors

This work is done Solely by UDIT GUPTA.
