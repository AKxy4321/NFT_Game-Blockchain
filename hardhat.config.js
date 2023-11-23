require("dotenv").config();

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");
require("ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
};
