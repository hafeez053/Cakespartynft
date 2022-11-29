import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CakesParty',
  tokenName: 'Cakes Party',
  tokenSymbol: 'CP',
  hiddenMetadataUri: 'ipfs://bafybeig5ja6rlhha7dhh2pzo25qj24ddw4ed5wmksbf43rhw23nfddh734/1.json',
  maxSupply: 2222,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.049,
    maxMintAmountPerTx: 3,
  },
  contractAddress: '0xAf69822935058fb0Bb7bD522d7cb57A6Ed851Ec5',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
