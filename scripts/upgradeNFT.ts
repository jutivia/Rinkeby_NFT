// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const contractID = '0x2d6A2D50609582d0aBa37d018C07e79d8003CDe7'
  const NFTToken = await ethers.getContractAt(
    "NFT",
    "0x59ecc6FD97EC36Eb2F7049f2F94Dcd48bC3552e0"
  );

  await NFTToken.updateTokenURI(
    1,
    "ipfs://QmQE3mKdTzEGtmaQ9P1ueSLDaXLvMQsPWE9NMmnADHwDaN"
  );
  // await NFTToken.tokenURI(1);
  console.log("NFT deployed to:", NFTToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
