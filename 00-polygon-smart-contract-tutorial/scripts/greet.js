
const hre = require("hardhat");
const ContractJson = require("../artifacts/contracts/Greeter.sol/Greeter.json");
const abi = ContractJson.abi;

async function main() {
  const alchemy = new hre.ethers.providers.AlchemyProvider(
    'maticmum',
    process.env.ALCHEMY_API_KEY
  );
  const userWallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, alchemy);
  const Greeter = new hre.ethers.Contract(
    process.env.CONTRACT_ADDRESS,
    abi,
    userWallet
  );

  // We're going to issue two write-transactions to modify the state
  // of the Polygon blockchain via our Greeter smart contract.

  // The first transaction sets a new greeting with setGreeting, and then
  // waits for the transaction to be mined before doing a sanity
  // check and checking the new greeting state.
  const setTx1 = await Greeter.setGreeting("web3 is ngmi!");
  await setTx1.wait();
  console.log("before: " + await Greeter.greet());

  // The second transaction does the exact same thing with a new input.
  const setTx2 = await Greeter.setGreeting("web3 is awesome!");
  await setTx2.wait();
  console.log("after: " + await Greeter.greet());
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
