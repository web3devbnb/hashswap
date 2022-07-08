const MasterChef = artifacts.require("MasterChef");
const HashSwapToken = artifacts.require("HashSwapToken");

module.exports = function (deployer,network,accounts) {
  deployer.deploy(MasterChef,HashSwapToken.address,accounts[0],accounts[0],'10000000000000');
};
