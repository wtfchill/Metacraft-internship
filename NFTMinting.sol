
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMinting is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    struct NFT {
        string name;
        string artist;
        string description;
        string creationDate;
    }

    mapping(uint256 => NFT) private _nfts;

    constructor() ERC721("NFTMinting", "NFTM") {}

    function mintNFT(
        address recipient,
        string memory name,
        string memory artist,
        string memory description,
        string memory creationDate
    ) public onlyOwner returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);

        _nfts[newItemId] = NFT({
            name: name,
            artist: artist,
            description: description,
            creationDate: creationDate
        });

        return newItemId;
    }

    function getNFTDetails(uint256 tokenId) public view returns (NFT memory) {
        require(_exists(tokenId), "ERC721Metadata: Query for nonexistent token");
        return _nfts[tokenId];
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIds.current();
    }
}
