let nfts = [];

const mintNFT = (name, artist, description, creationDate) => {
  const nft = {
    name,
    artist,
    description,
    creationDate,
  };
  nfts.push(nft);
};

const listNFTs = () => {
  nfts.forEach((nft, index) => {
    console.log(NFT ${index + 1}:);
    console.log(Name: ${nft.name});
    console.log(Artist: ${nft.artist});
    console.log(Description: ${nft.description});
    console.log(Creation Date: ${nft.creationDate});
    console.log('--------------------------');
  });
};

const getTotalSupply = () => nfts.length;

mintNFT("Digital Sunrise", "Alice", "A beautiful sunrise over the mountains.", "2024-05-29");
mintNFT("Urban Jungle", "Bob", "A chaotic and colorful urban scene.", "2024-05-30");
mintNFT("Serene Waters", "Charlie", "A calm and peaceful lake view.", "2024-06-01");

listNF
