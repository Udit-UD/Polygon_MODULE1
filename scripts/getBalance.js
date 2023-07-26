const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const walletAddress = "0x0215C3BF05d1114b3A9D496F91d8999ea1643796"; // place your erc721 contract address here
const tokenABI = tokenContractJSON.abi;
const tokenAddress = "0x8a002a49939de33da32c2f1f332a18e73bbbe472"; // place your public address for your wallet here

async function main() {

    const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

    console.log("You now have: " + count.toString() + " NFTs in your Wallet!");

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });