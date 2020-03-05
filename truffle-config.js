require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic =
  "seek toe pistol tell lyrics ride scare skate more cabin acid enforce";

const Web3 = require("web3");

require("babel-register");
require("babel-polyfill");

/* const web3 = new Web3(
  "https://ropsten.infura.io/v3/6177a5ebb0324e17b63f43f299050c8c"
); */
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/6177a5ebb0324e17b63f43f299050c8c`
        );
      },
      network_id: 3, // Ropsten's id
      gas: 5500000 // Ropsten has a lower block limit than mainnet
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
