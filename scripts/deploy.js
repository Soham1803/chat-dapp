
const hre = require("hardhat");

async function main() {
  
  const lock = await hre.ethers.deployContract("Lock");

  await lock.waitForDeployment();

  console.log(
    `Contract Address: ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
