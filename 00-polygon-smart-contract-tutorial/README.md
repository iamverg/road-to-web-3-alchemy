# Basic Sample Hardhat Project

This project demonstrates a basic Polygon smart contract.
The Greeter is a smart contract where you can set a greeting, and somebody else
is able to read that greeting :)
npx hardhat run scripts/greet.js --network mumbai is going to
issue two write-transactions to modify the state
of the Polygon blockchain via our Greeter smart contract.
The first transaction sets a new greeting with setGreeting, and then
waits for the transaction to be mined before doing a sanity
check and checking the new greeting state.

Try running some of the following tasks:
