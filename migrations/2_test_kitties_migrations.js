const TestKitties = artifacts.require("./TestKitties.sol");

module.exports = async function(deployer) {
    await deployer.deploy(TestKitties, "TestKitties", "TestKitties")
    const erc721 = await TestKitties.deployed()
};