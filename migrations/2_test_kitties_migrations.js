const TestKitties = artifacts.require("./TestKitties.sol");

module.exports = async function(deployer) {
    await deployer.deploy(TestKitties);
    await TestKitties.deployed()
};