<<<<<<< HEAD
//const HDWalletProvider = require("@truffle/hdwallet-provider");
//const mnemonic = "Red Orange Yellow Green Blue Indigo Violet";

// const Web3 = require('web3');

require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
=======
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
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        `https://ropsten.infura.io/v3/6177a5ebb0324e17b63f43f299050c8c`
      ),
      network_id: 3, // Ropsten's id
      gas: 5500000 // Ropsten has a lower block limit than mainnet
    },
    rinkeby: {
      provider: new HDWalletProvider(
        mnemonic,
        "https://rinkeby.infura.io/v3/6177a5ebb0324e17b63f43f299050c8c"
      ),
      network_id: 4, // Ropsten's id
      gas: 5500000 // Ropsten has a lower block limit than mainnet
    },
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
<<<<<<< HEAD
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
=======
    }
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
