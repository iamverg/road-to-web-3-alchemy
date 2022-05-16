# Buy Me a Coffee" DeFi dApp

Buy Me A Coffee is a popular website that creators, educators, entertainers,
and all kinds of people use to create a landing page where anyone can send some
amount of money as a thank you for their services. However, in order to use it,
you must have a bank account and a credit card. Not everyone has that!
A benefit of decentralized applications built on top of a blockchain is that anyone from around the world can access the app using just an Ethereum wallet, which anyone can set up for free in under 1 minute. Let's see how we can use that to our advantage!

This is smart contract that allows visitors to send you (fake) ETH as tips and leave nice messages, using Alchemy, Hardhat, Ethers.js, and Ethereum Goerli/Rinkeby(which one isn't down at the time of deployment :D ).

## test buy-coffe.js script on local node

```shell
npx hardhart run scripts/buy-coffe.js
```

## deploy local node

```shell
npx hardhat run scripts/deploy.js
```

## deploy on goerli network

```shell
npx hardhat run scripts/deploy.js --network goerli
```

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/buy-coffee.js
npx hardhat help
```
