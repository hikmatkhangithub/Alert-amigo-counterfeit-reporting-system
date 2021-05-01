const Migrations = artifacts.require("Migrations");

// deploying the smart contract using migrations
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
