
export interface Coin {
  id: number;
  name: string;
  symbol: string;
  rank: number;
  price: string;
  change24hr: string;
  cap: string;
  volume: string;
  circulating: string;
  img: string;
  color: string;
  sparklineData: number[];
}

const getCoinIcon = (symbol: string) =>
  `https://s3-us-west-2.amazonaws.com/s.cdpn.io/1468070/${symbol.toLowerCase()}.svg`;

const ORANGE = 'ORANGE';
const BLUE = 'BLUE';
const GREEN = 'GREEN';
const GRAY = 'GRAY';

export const getCoinColor = (symbol: string) => {
  switch (symbol) {
    case 'ETH':
    case 'XRP':
    case 'ADA':
    case 'SOL':
    case 'DOT':
      return BLUE;
    case 'USDT':
    case 'USDC':
      return GREEN;
    case 'BTC':
    case 'BNB':
      return ORANGE;
    default:
      return GRAY;
  }
};

// 8 coins total
export const mockData: Coin[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: '28,450.12',
    change24hr: '2.1',
    cap: '550,000,000,000',
    volume: '35,000,000,000',
    circulating: '19,000,000',
    img: getCoinIcon('BTC'),
    color: getCoinColor('BTC'),
    sparklineData: [27600, 27800, 28000, 27900, 28100, 28300, 28450],
  },
  {
    id: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    rank: 2,
    price: '1,840.33',
    change24hr: '-0.5',
    cap: '220,000,000,000',
    volume: '15,000,000,000',
    circulating: '120,000,000',
    img: getCoinIcon('ETH'),
    color: getCoinColor('ETH'),
    sparklineData: [1850, 1870, 1860, 1855, 1865, 1830, 1840],
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    rank: 3,
    price: '1.00',
    change24hr: '0.02',
    cap: '90,000,000,000',
    volume: '60,000,000,000',
    circulating: '90,000,000,000',
    img: getCoinIcon('USDT'),
    color: getCoinColor('USDT'),
    sparklineData: [1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00],
  },
  {
    id: 4,
    name: 'Binance Coin',
    symbol: 'BNB',
    rank: 4,
    price: '310.45',
    change24hr: '1.8',
    cap: '50,000,000,000',
    volume: '2,500,000,000',
    circulating: '160,000,000',
    img: getCoinIcon('BNB'),
    color: getCoinColor('BNB'),
    sparklineData: [300, 305, 307, 308, 312, 315, 310],
  },
  {
    id: 5,
    name: 'Solana',
    symbol: 'SOL',
    rank: 5,
    price: '52.10',
    change24hr: '3.5',
    cap: '20,000,000,000',
    volume: '1,200,000,000',
    circulating: '385,000,000',
    img: getCoinIcon('SOL'),
    color: getCoinColor('SOL'),
    sparklineData: [50, 51, 49, 52, 53, 54, 52],
  },
  {
    id: 6,
    name: 'Cardano',
    symbol: 'ADA',
    rank: 6,
    price: '0.48',
    change24hr: '-1.2',
    cap: '16,000,000,000',
    volume: '600,000,000',
    circulating: '34,000,000,000',
    img: getCoinIcon('ADA'),
    color: getCoinColor('ADA'),
    sparklineData: [0.50, 0.49, 0.48, 0.47, 0.48, 0.49, 0.48],
  },
  {
    id: 7,
    name: 'Ripple',
    symbol: 'XRP',
    rank: 7,
    price: '0.75',
    change24hr: '0.8',
    cap: '38,000,000,000',
    volume: '800,000,000',
    circulating: '51,000,000,000',
    img: getCoinIcon('XRP'),
    color: getCoinColor('XRP'),
    sparklineData: [0.74, 0.75, 0.76, 0.75, 0.74, 0.75, 0.75],
  },
  {
    id: 8,
    name: 'Polkadot',
    symbol: 'DOT',
    rank: 8,
    price: '6.20',
    change24hr: '2.4',
    cap: '7,000,000,000',
    volume: '300,000,000',
    circulating: '1,100,000,000',
    img: getCoinIcon('DOT'),
    color: getCoinColor('DOT'),
    sparklineData: [6.0, 6.1, 6.2, 6.3, 6.2, 6.1, 6.2],
  },
];
 