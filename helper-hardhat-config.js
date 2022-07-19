const networkConfig = {
  4: {
    name: "rinkeby",
    ethUsdPriceFeed: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: " 0xf9680d99d6c9589e2a93a78a04a279e509205945",
  },

  56: {
    name: "BSC",
    ethUsdPriceFeed: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
  },
  43114: {
    name: "Avax",
    ethUsdPriceFeed: "0x976b3d034e162d8bd72d6b9c989d545b839003b0",
  },
};

const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
};
