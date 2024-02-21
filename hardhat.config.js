require("@nomicfoundation/hardhat-toolbox");
require("dotenv")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/71f377bdafaa47d7afc4f8c831f4ee7a",
      accounts: ["00c179b55ba02ae0622492a4f1f5a87f99a3e876ac0a873bba466db555fa7786"]
    }
  }
};
