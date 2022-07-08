const HashFactory = artifacts.require("HashFactory");
module.exports = function (deployer, network, accounts) {
  deployer.deploy(HashFactory, accounts[0])
};