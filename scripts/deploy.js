
const hre = require("hardhat");

async function main() {
  
  const chatApp = await hre.ethers.deployContract("ChatApp");

  await chatApp.waitForDeployment();

  console.log(
    `Contract Address: ${chatApp.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// npx hardhat node
// npx hardhat run scripts/deploy.js --network localhost