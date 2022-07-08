const HashSwapToken = artifacts.require("HashSwapToken");

module.exports = function (deployer) {
  deployer.deploy(HashSwapToken);
};
