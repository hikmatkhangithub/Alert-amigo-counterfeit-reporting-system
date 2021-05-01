const Marketplace = artifacts.require("Marketplace");

// deploying Marketplace smart contract used in alert-amigo counterfeit system
module.exports = function(deployer) {
  deployer.deploy(Marketplace);
};
