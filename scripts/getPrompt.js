const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xC47aFa82bCCa4947fBcF7E426010f3fe49Da1F40";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x064bC27579E1641B7e0A50e4F53fce125807e717";

async function main() {
  const myContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const count = await myContract.balanceOf(walletAddress); // It will return number of NFTs in wallet

  for (let i = 0; i < count; i++) {
    const tokenID = await myContract.tokenOfOwnerByIndex(walletAddress, i);
    const prompt = await myContract.promptDescription(tokenID);
    console.log(`NFT with TokenID ${tokenID.toString()} has prompt: ${prompt}`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
