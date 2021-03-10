import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'

chai.use(chaiAsPromised)
const { expect, assert } = chai

var TestKitties = artifacts.require("TestKitties");

contract('TestKitties', function(accounts) {
    let contract;

    const account0 = accounts[0];
    const account1 = accounts[1];
    const account2 = accounts[2];
    const account3 = accounts[3];

    const token1 = 1;
    const token2 = 2;

    before(async() => {
        contract = await TestKitties.new();
    });

    it('Deploy', async () => {
        expect(await contract.symbol()).to.equal("TK");
        expect(await contract.name()).to.equal("TestKitties");
    });

    it('Mint', async () => {
        expect(await contract.exists(9999)).to.be.false; // Dummy tokenId

        await contract.mint(account1, token1, {from: account0});
        expect(await contract.exists(token1)).to.be.true;
        expect(await contract.ownerOf(token1)).to.equal(account1);

        await contract.mint(account2, token2, {from: account0});
        expect(await contract.exists(token2)).to.be.true;
        expect(await contract.ownerOf(token2)).to.equal(account2);
    });

    it('Safe Transfers', async () => {
        const unownedTokenId = contract.safeTransferFrom(account2, account3, token1, {from: accounts[2]}); // tokenId
        expect(unownedTokenId).to.be.rejectedWith(/VM Exception while processing transaction: revert/);

        const wrongOwner = contract.safeTransferFrom(account1, account3, token2, {from: accounts[1]}); // wrong owner
        expect(wrongOwner).to.be.rejectedWith(/VM Exception while processing transaction: revert/);

        // Noticed that the from gas param needs to be the token owners or it fails
        const wrongFromGas = contract.safeTransferFrom(account2, account3, token2, {from: accounts[1]}); // wrong owner
        expect(wrongFromGas).to.be.rejectedWith(/VM Exception while processing transaction: revert/);

        await contract.safeTransferFrom(account2, account3, token2, {from: accounts[2]});
        expect(await contract.ownerOf(token2)).to.equal(account3)
    })
});
