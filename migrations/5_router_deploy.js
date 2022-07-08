const HashFactory = artifacts.require("HashFactory");
const HashRouter = artifacts.require("HashRouter");

const WETH = {
  'bsc': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  'testnet': '0xaE8E19eFB41e7b96815649A6a60785e1fbA84C1e',
  'development': '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
}

module.exports = function (deployer, network, accounts) {
  deployer.deploy(HashRouter, HashFactory.address, WETH[network]);
};