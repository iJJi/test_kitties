pragma solidity ^0.4.23;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract TestKitties is ERC721Token, Ownable {
    string public constant NAME = "TestKitties";
    string public constant SYMBOL = "TK";

    constructor () public ERC721Token(NAME, SYMBOL) {
    }

    function mint(address _to, uint256 _tokenId) public payable {
        super._mint(_to, _tokenId);
    }
}