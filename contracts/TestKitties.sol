pragma solidity ^0.8.0;

// SPDX-License-Identifier: MIT

// See https://docs.openzeppelin.com/contracts/4.x/api/token/erc721

import '@openzeppelin/contracts/contracts/token/ERC721/ERC721.sol';

contract TestKitties is ERC721 {
    string public constant NAME = "TestKitties";
    string public constant SYMBOL = "TK";

    constructor () ERC721(NAME, SYMBOL) {
    }

    function mint(address _to, uint256 _tokenId) public payable {
        super._mint(_to, _tokenId);
    }

    function exists(uint256 tokenId) public view virtual returns (bool) {
        return super._exists(tokenId);
    }
}
