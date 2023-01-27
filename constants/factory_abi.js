// FantomNFTFactory deployed to: 0xeC5e93a882b8CB169A93db2dcb45539ec7ffF1F3
// FantomNFTFactoryPrivate deployed to: 0x83D7493882bD20Be2BF1f44f64f05CdF2359Ba5e
// FantomNFTTradable deployed to: 0xc715C855585e4d0d2c2AdAF85E94B0f9EdA0a77c
// FantomNFTTradablePrivate deployed to: 0xcF35eD04BdD5dDe825A51E3f0a2A03527f87edaa
// FantomTokenRegistry deployed to 0x600D1F8ED05Dc7CC748e37012Bc5a01999Efb069
// FantomAddressRegistry deployed to 0xe8eb15A44FfF06e0fCC098e34940db9163A157D1
// FantomPriceFeed deployed to 0xb62652D74751a0F74D8C335731ca1030ADfC7bd0
// FantomArtTradable deployed to: 0x219f0d26882427F9F0aBeEB077773693dB625fb5
// FantomArtTradablePrivate deployed to: 0xcfbD3e17BadF1bBD0456Dd57a13D984f54EdC12d
// FantomArtFactory deployed to: 0x3a8c3eA861Ca1Ffc709b27c5187562c298221776
// FantomArtFactoryPrivate deployed to: 0xbAb6e9e25aa7E8EcbF7E76277961C35a459D2307

const CollectionFactoryContract = {
  MAINNET_721_PRIVATE: '0xa4fDb09e1796730bfBA8a352074F0dd65D400Dd4', //FantomNFTFactoryPrivate
  MAINNET_721_PUBLIC: '0xCC7A2eC7A8A0564518fD3D2ca0Df8B2137626144', //FantomNFTFactory
  TESTNET_721_PRIVATE: '0x83D7493882bD20Be2BF1f44f64f05CdF2359Ba5e', //FantomNFTFactoryPrivate
  TESTNET_721_PUBLIC: '0xeC5e93a882b8CB169A93db2dcb45539ec7ffF1F3', //FantomNFTFactory
  MAINNET_1155_PRIVATE: '0x736Eae40AdFf88570b92378c97a0D11b44E1C953', //FantomArtFactoryPrivate
  MAINNET_1155_PUBLIC: '0x520DaB621f93F59d3557174280AB1B6d4FB8c956', //FantomArtFactory
  TESTNET_1155_PRIVATE: '0xcfbD3e17BadF1bBD0456Dd57a13D984f54EdC12d', //FantomArtFactoryPrivate
  TESTNET_1155_PUBLIC: '0x3a8c3eA861Ca1Ffc709b27c5187562c298221776', //FantomArtFactory
  ABI: [
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'exists',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function'
    }
  ]
};

module.exports = CollectionFactoryContract;
