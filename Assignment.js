let nfts = [];

function mintNFT( name,artist,description, creationdate) {
  const nft = {
    name,
    artist,
    description,
    creationdate,
    
  };
  nfts.push(nft);
}
function listNFTs() {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`Name: ${nft.name}`);
    console.log(`Artist: ${nft.artist}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Creation Date: ${nft.creationDate}`);
    console.log('--------------------------');
  });
}

function getTotalSupply() {
  return nfts.length;
}

mintNFT( "digital","aman","a beautiful day", "2023-05-03");
mintNFT("jungle"," devansh","a hourse","2024-05-05");
mintNFT("water","devesh","peacfull view","2025-06-2022");

listNFTs(); 
console.log("Total NFTs created:", getTotalSupply()); 
