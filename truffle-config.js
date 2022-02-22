const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

const RINKEBY_DEPLOYER_KEY = process.env.RINKEBY_DEPLOYER_KEY;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(RINKEBY_DEPLOYER_KEY, `https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`),
      network_id: 4,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 360000
    },
    mainnet: {
      provider: () => new HDWalletProvider(RINKEBY_DEPLOYER_KEY, `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`),
      network_id: 1,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 360000
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      //  evmVersion: "byzantium"
      }
    }
  },
};
