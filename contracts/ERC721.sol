pragma solidity 0.8.4;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
contract NFT is ERC721URIStorage{
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
    constructor() ERC721("JUJU", "JMK") {}
  function createNFT(string memory baseURI) public returns (uint256) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(msg.sender,newItemId);
    _setTokenURI(newItemId, baseURI);

    return newItemId;
  }
  function updateTokenURI(uint newItemId, string memory baseURI) public {
      _setTokenURI(newItemId, baseURI);
  }
}