require('@nomiclabs/hardhat-waffle');

// My Alchemy goerli private key: https://eth-goerli.g.alchemy.com/v2/j3sw8I9pGKGRynZmeKaxQ5JwpTCWVmVn
// Metamask Account 1 Private key: 691fb8d8163278bea79f249b6e2ad2d4668a28d0e8ba3b0cb5ff50717e4b7c21
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/j3sw8I9pGKGRynZmeKaxQ5JwpTCWVmVn',
      accounts: ['691fb8d8163278bea79f249b6e2ad2d4668a28d0e8ba3b0cb5ff50717e4b7c21'],
    },
  },
};