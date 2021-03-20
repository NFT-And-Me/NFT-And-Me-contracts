const { ethers } = require("hardhat");

async function main() {
   const NFTizeMe = await ethers.getContractFactory("NFTizeMe");
   const instance = await NFTizeMe.deploy();

   console.log("NFTizeMe deployed to:", instance.address);
   // deployed on Rinkeby: 0x8cD5C249bEA0619D3aF304618c48689d23613894
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });