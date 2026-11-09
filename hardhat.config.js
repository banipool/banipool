// BaniPool contracts — compiler settings and networks used to build and verify the deployed contracts.
// Contracts: BaniZapV6, BaniKeeperV6, BaniZapCreate (addresses in README.md). No private keys are stored here.
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.26',
    settings: {
      optimizer: { enabled: true, runs: 1000 },
      // paris: no PUSH0, safe on every supported L1/L2.
      evmVersion: 'paris',
    },
  },
  networks: {
    bsc: { url: 'https://bsc-dataseed.bnbchain.org', chainId: 56 },
    bscTestnet: { url: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545', chainId: 97 },
    ethereum: { url: 'https://ethereum-rpc.publicnode.com', chainId: 1 },
    base: { url: 'https://mainnet.base.org', chainId: 8453 },
    arbitrum: { url: 'https://arb1.arbitrum.io/rpc', chainId: 42161 },
    optimism: { url: 'https://mainnet.optimism.io', chainId: 10 },
    polygon: { url: 'https://polygon-rpc.com', chainId: 137 },
    avalanche: { url: 'https://api.avax.network/ext/bc/C/rpc', chainId: 43114 },
  },
  sourcify: { enabled: true },
};
