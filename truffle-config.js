const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const { mnemonic, BSCSCANAPIKEY} = require('./.env.json');

// truffle run verify BEP20Token@{contract-address} --network testnet

module.exports = {
  plugins: [
  'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: BSCSCANAPIKEY
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas:20000000,
      gasPrice:5000000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.6", // A version or constraint - Ex. "^0.5.0"
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   }
 }
}
