// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  console.log(await ethers.provider);
  const NFTawait = await ethers.getContractFactory("NFT");
  const NFTToken = await NFTawait.deploy();

  await NFTToken.deployed();
  await NFTToken.createNFT(
    "ipfs://QmQE3mKdTzEGtmaQ9P1ueSLDaXLvMQsPWE9NMmnADHwDaN"
  );
  // await NFTToken.tokenURI(1);
  console.log("NFT deployed to:", NFTToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
