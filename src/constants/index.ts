import { ChainId, JSBI, Percent, Token, WETH } from '@cremepie/sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { fortmatic, injected, binanceinjected, portis, walletconnect, walletlink } from '../connectors'

export const ROUTER_ADDRESS = '0xE14df7cAe54555d038c4A441938e3Aaa0A0609a0'
export const ROUTER_ADD_REMOVE_LIQUIDITY_ADDRESS = '0x2d466b2b58bc254704e226686cf767820e0f6ab8'

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C')
export const USDT = new Token(ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD')
export const COMP = new Token(ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound')
export const MKR = new Token(ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker')
export const AMPL = new Token(ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth')
export const WBTC = new Token(ChainId.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 18, 'WBTC', 'Wrapped BTC')

export const B_DAI = new Token(
  ChainId.BSC_MAINNET,
  '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
  18,
  'DAI',
  'Dai Token'
)
export const BUSD = new Token(
  ChainId.BSC_MAINNET,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'BUSD Token'
)
export const B_USDT = new Token(
  ChainId.BSC_MAINNET,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD'
)

export const T_DAI = new Token(
  ChainId.BSC_TESTNET,
  '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
  18,
  'DAI',
  'Dai Token'
)
export const T_BUSD = new Token(
  ChainId.BSC_TESTNET,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  6,
  'BUSD',
  'BUSD Token'
)
export const T_USDT = new Token(
  ChainId.BSC_TESTNET,
  '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  6,
  'USDT',
  'Tether USD'
)

export const P_USDC = new Token(
  ChainId.POLYGON_MAINNET,
  '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  18,
  'USDC',
  'USDC Token'
)
export const P_USDT = new Token(
  ChainId.POLYGON_MAINNET,
  '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  18,
  'USDT',
  'Tether USD'
)

export const PT_DAI = new Token(
  ChainId.POLYGON_TESTNET,
  '0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867',
  18,
  'DAI',
  'Dai Token'
)
export const PT_BUSD = new Token(
  ChainId.POLYGON_TESTNET,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  6,
  'BUSD',
  'BUSD Token'
)
export const PT_USDT = new Token(
  ChainId.POLYGON_TESTNET,
  '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
  6,
  'USDT',
  'Tether USD'
)

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 14
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320
export const PROPOSAL_LENGTH_IN_SECS = AVERAGE_BLOCK_TIME_IN_SECS * PROPOSAL_LENGTH_IN_BLOCKS

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

const UNI_ADDRESS = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'
export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.RINKEBY]: new Token(ChainId.RINKEBY, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.ROPSTEN]: new Token(ChainId.ROPSTEN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.GÖRLI]: new Token(ChainId.GÖRLI, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.KOVAN]: new Token(ChainId.KOVAN, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.BSC_MAINNET]: new Token(ChainId.BSC_MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.BSC_TESTNET]: new Token(ChainId.BSC_TESTNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.POLYGON_MAINNET]: new Token(ChainId.POLYGON_MAINNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap'),
  [ChainId.POLYGON_TESTNET]: new Token(ChainId.POLYGON_TESTNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap')
}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [UNI_ADDRESS]: 'UNI',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock'
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x090D4613473dEE047c3f2706764f49E0821D256e'
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.MAINNET]: [WETH[ChainId.MAINNET]],
  [ChainId.ROPSTEN]: [WETH[ChainId.ROPSTEN]],
  [ChainId.RINKEBY]: [WETH[ChainId.RINKEBY]],
  [ChainId.GÖRLI]: [WETH[ChainId.GÖRLI]],
  [ChainId.KOVAN]: [WETH[ChainId.KOVAN]],
  [ChainId.BSC_MAINNET]: [WETH[ChainId.BSC_MAINNET]],
  [ChainId.BSC_TESTNET]: [WETH[ChainId.BSC_TESTNET]],
  [ChainId.POLYGON_MAINNET]: [WETH[ChainId.POLYGON_MAINNET]],
  [ChainId.POLYGON_TESTNET]: [WETH[ChainId.POLYGON_TESTNET]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT, COMP, MKR],
  [ChainId.BSC_MAINNET]: [...WETH_ONLY[ChainId.BSC_MAINNET], B_DAI, BUSD, B_USDT],
  [ChainId.POLYGON_MAINNET]: [...WETH_ONLY[ChainId.POLYGON_MAINNET], P_USDC, P_USDT],
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  [ChainId.MAINNET]: {
    [AMPL.address]: [DAI, WETH[ChainId.MAINNET]]
  }
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET]],
  [ChainId.BSC_MAINNET]: [...WETH_ONLY[ChainId.BSC_MAINNET]],
  [ChainId.BSC_TESTNET]: [...WETH_ONLY[ChainId.BSC_TESTNET], T_USDT, T_BUSD, T_DAI],
  [ChainId.POLYGON_MAINNET]: [...WETH_ONLY[ChainId.POLYGON_MAINNET]],
  [ChainId.POLYGON_TESTNET]: [...WETH_ONLY[ChainId.POLYGON_TESTNET], PT_USDT, PT_BUSD, PT_DAI]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.MAINNET]: [...WETH_ONLY[ChainId.MAINNET], DAI, USDC, USDT],
  [ChainId.BSC_MAINNET]: [...WETH_ONLY[ChainId.BSC_MAINNET], B_USDT, BUSD, B_DAI],
  [ChainId.BSC_TESTNET]: [...WETH_ONLY[ChainId.BSC_TESTNET], T_USDT, T_BUSD, T_DAI],
  [ChainId.POLYGON_MAINNET]: [...WETH_ONLY[ChainId.POLYGON_MAINNET], P_USDC, P_USDT],
  [ChainId.POLYGON_TESTNET]: [...WETH_ONLY[ChainId.POLYGON_TESTNET], PT_USDT, PT_BUSD, PT_DAI]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.MAINNET]: [
    [
      new Token(ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
      new Token(ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
    ],
    [USDC, USDT],
    [DAI, USDT]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  EZDEFI: {
    connector: injected,
    name: 'ezDeFi',
    iconName: 'zd.png',
    description: 'A multi-functional browser extension and more...',
    href: null,
    color: '#E8831D',
    mobile: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  BINANCE: {
    connector: binanceinjected,
    name: 'Binance Chain Wallet',
    iconName: 'bnb.svg',
    description: 'A Crypto Wallet for Binance Smart Chain',
    href: null,
    color: '#F9A825'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))
