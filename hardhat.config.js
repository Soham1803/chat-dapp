require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const PRIVATE_KEY="a0482d8921267729222c3a206258759c96dc3b1b8c6b740a3f5485a5c48eceec";
const RPC_URL="https://rpc.ankr.com/polygon_mumbai";
module.exports = {
  defaultNetwork:"polygon_mumbai",
  networks: {
    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai:{
      url:RPC_URL,
      accounts:[`0x${PRIVATE_KEY}`],
    }
  },
  solidity: {
    version:"0.8.17",
    settings:{
      optimizer:{
        enabled:true,
        runs: 200,
      }
    }
  }
  
};
// npx hardhat run scripts/deploy.js --network polygon_mumbai