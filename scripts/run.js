const { ethers } = require("hardhat");

async function main() {
  const gameContract = await ethers.getContractFactory("MyEpicGame");
  const game = await gameContract.deploy(
    ["Master Chief", "Mario", "Pikachu"], // Names
    [
      "https://i.imgur.com/G5vFLxn.jpeg", // Images
      "https://i.imgur.com/q9xxo4d.jpeg",
      "https://i.imgur.com/WMB6g9u.png",
    ],
    [200, 300, 100],  // HP values
    [50, 25, 100],    // Attack damage values
    'Dragon',
    'https://i.imgur.com/n87W4ylb.jpg',
    10000,           //Boss Hp
    50               //Boss Damage
  );
  await game.waitForDeployment();

  console.log("Contract deployed to:", game.target);

  let txn;
  txn = await game.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await game.attackBoss();
  await txn.wait();
  
  txn = await game.attackBoss();
  await txn.wait();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
