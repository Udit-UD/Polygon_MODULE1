const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xC47aFa82bCCa4947fBcF7E426010f3fe49Da1F40"; // place your erc721 contract address here [sepolia]
// const tokenAddress = "0x33DC8165dCF51be9726A0FAD4643aa8780dAB6c9"; // place your erc721 contract address here [amoy]
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x064bC27579E1641B7e0A50e4F53fce125807e717"; // place your public address for your wallet here

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
