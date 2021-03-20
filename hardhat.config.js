/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");

 module.exports = {
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
      hardhat: {},
      rinkeby: {
        url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
        accounts: {
          mnemonic: process.env.MNEMONIC,
        },
        timeout: 200000000,
        gas: "auto",
      },
  }
};
