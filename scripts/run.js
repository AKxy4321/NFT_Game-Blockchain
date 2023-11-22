const { ethers } = require("hardhat");

async function main() {
  const gameContract = await ethers.getContractFactory("MyEpicGame");
  const game = await gameContract.deploy(
    ["Master Chief", "Mario", "Pikachu"], // Names
    [
      "https://wallpapercave.com/dwp2x/wp12212164.jpg", // Images
      "https://wallpapercave.com/dwp2x/wp11915469.jpg",
      "https://wallpapercave.com/dwp2x/wp7174330.jpg"
    ],
    [200, 300, 100],  // HP values
    [50, 25, 100],    // Attack damage values
    'Diablo',
    'https://wallpapercave.com/uwp/uwp3520412.webp',
    10000,           //Boss Hp
    50               //Boss Damage
  );
  await game.waitForDeployment();

  console.log("Contract deployed to:", game.target);
  console.log('Done');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
