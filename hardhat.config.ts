require("@nomiclabs/hardhat-waffle")
import { task } from "hardhat/config";
// this is infura project id for deployment
const projectId = "3b3db075aa4742dbbbd0fb8980dc2233"
const fs = require("fs")

import { HardhatUserConfig, NetworkUserConfig } from "hardhat/types";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";

// const keyData = fs.readFileSync("./p-key.txt", {
//   encoding: "utf8",
//   flag: "r",
// })
// console.log(keyData)

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
  
    for (const account of accounts) {
      console.log(account.address);
    }
  });

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // config standard
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/cf7a68dc4ed84853afad916d998bb03e`,
      accounts: [],
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
