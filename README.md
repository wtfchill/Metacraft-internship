# NFT Minting Application

This is a simple JavaScript application to mint and list NFTs (Non-Fungible Tokens).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project allows you to create NFTs by specifying their name, artist, description, and creation date. It also provides functionality to list all minted NFTs and display the total supply of NFTs created.

## Features

- Mint a new NFT with a name, artist, description, and creation date.
- List all minted NFTs with their details.
- Get the total supply of minted NFTs.

## Installation

To use this project, simply clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/nft-minting-app.git
cd nft-minting-app
```
## Usage
Open the index.html file in your web browser.
The JavaScript code in script.js will be executed, allowing you to mint new NFTs and list them.
Alternatively, you can run the JavaScript code in a Node.js environment:

Install Node.js from here.
Create a new file app.js and copy the JavaScript code from script.js.
Run the file using Node.j
```
node app.js
```
## Example
Here's an example of how to mint and list NFTs using the provided JavaScript functions:
```
let nfts = [];

function mintNFT(name, artist, description, creationDate) {
  const nft = {
    name,
    artist,
    description,
    creationDate,
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

mintNFT("digital", "aman", "a beautiful day", "2023-05-03");
mintNFT("jungle", "devansh", "a horse", "2024-05-05");
mintNFT("water", "devesh", "peaceful view", "2025-06-22");

listNFTs();
console.log("Total NFTs created:", getTotalSupply());
```
## Contributing
Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue on GitHub.

 ## License
This project is licensed under the MIT License. See the LICENSE file for details.


