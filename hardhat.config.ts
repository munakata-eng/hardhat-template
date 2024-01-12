import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import { config as dotenvConfig } from 'dotenv'
dotenvConfig()

const {
  RPC_PROVIDER_URL_ETHEREUM,
  RPC_PROVIDER_URL_GOERLI,
  RPC_PROVIDER_URL_POLYGON,
  RPC_PROVIDER_URL_SEPOLIA,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY,
} = process.env;

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  // Solidity
  solidity: {
    version: '0.8.20',
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: 'none',
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  gasReporter: {
    enabled: true,
    currency: 'JPY',
    gasPrice: 10,
    gasPriceApi: 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  },
  // Network
  networks: {
    goerli: {
      url: RPC_PROVIDER_URL_GOERLI,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    sepolia: {
      url: RPC_PROVIDER_URL_SEPOLIA,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: RPC_PROVIDER_URL_ETHEREUM,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    polygon: {
      url: RPC_PROVIDER_URL_POLYGON,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  // EtherScan
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY || '',
      sepolia: ETHERSCAN_API_KEY || '',
      mainnet: ETHERSCAN_API_KEY || '',
      polygon: process.env.POLYGONSCAN_API_KEY || '',
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || '',
    },
  }
};

export default config
