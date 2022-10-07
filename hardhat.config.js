require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    local: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      url: `http://localhost:8545`,
    },
    goreli: {
      url: `https://eth-goerli.g.alchemy.com/v2/KflxP4qTi_rAQVFxn9yvtedOtnkRMj3M`,
      accounts: ["27aa2b5770c866d853acad26af489bf281fa25a720031d3ef6cbe38b3f0f4265"],
      timeout: 10000000,
    },
  },
  compilers: [
    {
      version: "0.8.7",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    {
      version: "0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    {
      version: "0.5.3",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  ],

  mocha: {
    timeout: 100000,
  }
};
