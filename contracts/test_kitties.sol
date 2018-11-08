pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract TestKitties is ERC721Token, Ownable {
    constructor (string _name, string _symbol) public ERC721Token(_name, _symbol) {
    }

    function mint(address _to, uint256 _tokenId) public payable onlyOwner {
        super._mint(_to, _tokenId);
    }
}