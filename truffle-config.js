//const HDWalletProvider = require("@truffle/hdwallet-provider");
//const mnemonic = "Red Orange Yellow Green Blue Indigo Violet";

// const Web3 = require('web3');

require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    /* ropsten: {
       provider: () => new HDWalletProvider(mnemonic, `mainnet.infura.io/v3/6177a5ebb0324e17b63f43f299050c8c`),
       network_id: 3,       // Ropsten's id
       gas: 5500000,        // Ropsten has a lower block limit than mainnet
       confirmations: 2,    // # of confs to wait between deployments. (default: 0)
       timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
       skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    }*/
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
