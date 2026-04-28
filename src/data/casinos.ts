export interface Casino {
  id: number;
  slug: string;
  name: string;
  short: string;
  logoInitials: string;
  brandColor: string;
  rating: number;
  established: number;
  license: string;
  payout: string;
  cryptos: string[];
  fiat: boolean;
  vpnFriendly: boolean;
  rakebackPct: number;
  weeklyBonus: string;
  signupBonus: string;
  promoCode: string;
  features: string[];
  description: string;
  pros: string[];
  cons: string[];
  url: string;
}

export const casinos: Casino[] = [
  {
    id: 1,
    slug: 'stake',
    name: 'Stake',
    short: 'STK',
    logoInitials: 'S',
    brandColor: '#1A2C38',
    rating: 4.8,
    established: 2017,
    license: 'Curacao 8048/JAZ',
    payout: 'Instant',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT', 'USDC', 'TRX', 'XRP'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 12,
    weeklyBonus: 'Weekly $10k race',
    signupBonus: '200% up to $1,000',
    promoCode: 'FAIRLEDGER',
    features: ['VIP host', 'Original games', '24/7 support', 'Sportsbook'],
    description:
      'The largest crypto casino by volume, with a deep proprietary game library, market-leading sportsbook and a 12% wager-share program when you sign up via FairLedger.',
    pros: [
      'Industry-leading deposit volume - longest track record',
      'Generous weekly leaderboard races',
      'Original games with verifiable fairness',
    ],
    cons: ['Restricted in many regulated markets', 'No fiat deposits'],
    url: 'https://stake.com/?c=fairledger',
  },
  {
    id: 2,
    slug: 'roobet',
    name: 'Roobet',
    short: 'ROO',
    logoInitials: 'R',
    brandColor: '#FFD600',
    rating: 4.6,
    established: 2019,
    license: 'Curacao Antillephone N.V.',
    payout: '< 5 min',
    cryptos: ['BTC', 'ETH', 'LTC', 'USDT'],
    fiat: false,
    vpnFriendly: false,
    rakebackPct: 10,
    weeklyBonus: 'Roowards reload Mondays',
    signupBonus: '20% rakeback (no max)',
    promoCode: 'LEDGER',
    features: ['Roowards loyalty', 'Streamer-friendly', 'Crash & Mines'],
    description:
      'Roobet pioneered the streamer-first model. The Roowards loyalty system pays back a percentage of every wager, and reload offers drop every Monday at 12:00 UTC.',
    pros: [
      'Best-in-class streamer integrations',
      'Fast Lightning withdrawals',
      'Strong Original game suite (Crash, Plinko)',
    ],
    cons: ['No sportsbook', 'Limited to four cryptocurrencies'],
    url: 'https://roobet.com/?ref=fairledger',
  },
  {
    id: 3,
    slug: 'rainbet',
    name: 'Rainbet',
    short: 'RAI',
    logoInitials: 'B',
    brandColor: '#00D26A',
    rating: 4.5,
    established: 2022,
    license: 'Curacao Antillephone N.V.',
    payout: 'Instant',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT', 'USDC', 'BNB', 'TRX', 'DOGE'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 15,
    weeklyBonus: '$100k weekly race',
    signupBonus: '15% rakeback + $300 race',
    promoCode: 'FAIRLEDGER',
    features: ['Massive race', 'Sportsbook', 'Telegram bot'],
    description:
      'Fastest-growing casino of 2025-2026. Massive $100k weekly leaderboard, fully integrated sportsbook and the most generous flat rakeback in the industry.',
    pros: [
      'Industry-leading 15% flat rakeback',
      'No-restriction $100k weekly race',
      'Telegram bot for one-click deposits',
    ],
    cons: ['Newer brand - less long-term track record'],
    url: 'https://rainbet.com/?r=fairledger',
  },
  {
    id: 4,
    slug: 'shuffle',
    name: 'Shuffle',
    short: 'SHF',
    logoInitials: 'H',
    brandColor: '#F0B433',
    rating: 4.4,
    established: 2023,
    license: 'Anjouan Gaming License',
    payout: '< 1 min',
    cryptos: ['BTC', 'ETH', 'SOL', 'USDT', 'USDC'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 11,
    weeklyBonus: 'Weekly $50k race',
    signupBonus: '$1,000 deposit boost',
    promoCode: 'LEDGER',
    features: ['SHFL token', 'Originals studio', 'Daily missions'],
    description:
      'Crypto-native casino with its own utility token. Daily missions, free weekly bonuses and an in-house Originals studio that ships fresh games every quarter.',
    pros: ['SHFL token rewards', 'Beautiful UI', 'Generous daily missions'],
    cons: ['Smaller live-dealer library'],
    url: 'https://shuffle.com/?r=fairledger',
  },
  {
    id: 5,
    slug: 'bcgame',
    name: 'BC.Game',
    short: 'BCG',
    logoInitials: 'C',
    brandColor: '#FFB94B',
    rating: 4.3,
    established: 2017,
    license: 'Curacao master license',
    payout: '< 3 min',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT', 'USDC', 'BNB', 'TRX', 'DOGE', 'ADA', 'DOT'],
    fiat: true,
    vpnFriendly: true,
    rakebackPct: 8,
    weeklyBonus: 'Daily lucky spin',
    signupBonus: '300% on first 4 deposits',
    promoCode: 'FAIRLEDGER',
    features: ['Lucky Spin', '150+ cryptos', 'Sportsbook', 'Lottery'],
    description:
      'Supports more than 150 cryptocurrencies, has a built-in sportsbook and a daily Lucky Spin that has paid out hundreds of Lambos and seven-figure jackpots.',
    pros: ['Most cryptos accepted of any casino', 'Multilingual support', 'Daily free spins'],
    cons: ['UI density takes adjustment', 'Withdrawal limits on largest payouts'],
    url: 'https://bc.game/?i=fairledger',
  },
  {
    id: 6,
    slug: 'gamdom',
    name: 'Gamdom',
    short: 'GMD',
    logoInitials: 'G',
    brandColor: '#FF5A5F',
    rating: 4.4,
    established: 2016,
    license: 'Curacao 8048/JAZ',
    payout: 'Instant',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT', 'BNB'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 13,
    weeklyBonus: '$25k weekly race',
    signupBonus: '15% instant rakeback',
    promoCode: 'LEDGER',
    features: ['CSGO skin deposits', 'Originals', 'VIP perks'],
    description:
      'Long-standing operator born from the CS:GO skin betting era. Now a full crypto casino with a strong loyalty program and instant skin deposits/withdrawals.',
    pros: ['Skin deposits', 'High instant rakeback', 'Reliable since 2016'],
    cons: ['No sportsbook', 'Limited live-dealer choice'],
    url: 'https://gamdom.com/r/fairledger',
  },
  {
    id: 7,
    slug: 'cloudbet',
    name: 'Cloudbet',
    short: 'CLD',
    logoInitials: 'L',
    brandColor: '#00B26F',
    rating: 4.5,
    established: 2013,
    license: 'Curacao + Montenegro',
    payout: '< 10 min',
    cryptos: ['BTC', 'ETH', 'LTC', 'BCH', 'USDT', 'USDC', 'DAI', 'XRP'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 5,
    weeklyBonus: 'Loyalty club tiers',
    signupBonus: '100% up to 5 BTC',
    promoCode: 'FAIRLEDGER',
    features: ['Sportsbook', 'High limits', 'Esports', 'Live dealer'],
    description:
      'One of the oldest crypto sportsbooks still standing. Industry-best high-roller limits and an extensive esports book covering Tier-2 and Tier-3 events.',
    pros: ['Highest betting limits in crypto', 'Established since 2013', 'Top-tier sportsbook'],
    cons: ['Lower flat rakeback than rivals'],
    url: 'https://cloudbet.com/?af_token=fairledger',
  },
  {
    id: 8,
    slug: 'duelbits',
    name: 'Duelbits',
    short: 'DUL',
    logoInitials: 'D',
    brandColor: '#F2A900',
    rating: 4.2,
    established: 2020,
    license: 'Curacao Antillephone N.V.',
    payout: '< 1 min',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT', 'BNB'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 9,
    weeklyBonus: 'Daily challenges',
    signupBonus: '5% instant rakeback',
    promoCode: 'LEDGER',
    features: ['PVP modes', 'Originals', 'Daily challenges'],
    description:
      'Crypto-native casino best known for PvP head-to-head modes and a sleek, minimal UI. Daily challenges keep regulars engaged.',
    pros: ['Distinctive PvP modes', 'Snappy interface', 'Fast Lightning withdrawals'],
    cons: ['No sportsbook', 'Smaller game library'],
    url: 'https://duelbits.com/?a=fairledger',
  },
  {
    id: 9,
    slug: 'rollbit',
    name: 'Rollbit',
    short: 'RLB',
    logoInitials: 'O',
    brandColor: '#E80A89',
    rating: 4.1,
    established: 2020,
    license: 'Curacao Antillephone N.V.',
    payout: 'Instant',
    cryptos: ['BTC', 'ETH', 'SOL', 'USDT', 'RLB'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 10,
    weeklyBonus: 'RLB token buybacks',
    signupBonus: 'Up to 20% rakeback (NFT)',
    promoCode: 'FAIRLEDGER',
    features: ['Crypto futures', 'NFT rakeback', 'Sports betting'],
    description:
      'Hybrid casino + crypto futures exchange. Holds NFT rakeback packs that scale your wager-share to as high as 20%, plus 1000x leveraged crypto trading.',
    pros: ['NFT-tier rakeback model', 'Crypto futures trading', 'Daily $RLB token buybacks'],
    cons: ['Complex for newcomers', 'High volatility on RLB token'],
    url: 'https://rollbit.com/referral/fairledger',
  },
  {
    id: 10,
    slug: 'metawin',
    name: 'MetaWin',
    short: 'MWN',
    logoInitials: 'M',
    brandColor: '#21C7B5',
    rating: 4.3,
    established: 2022,
    license: 'Anjouan Gaming License',
    payout: '< 30 sec',
    cryptos: ['BTC', 'ETH', 'SOL', 'BASE', 'USDC'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 7,
    weeklyBonus: 'NFT prize draws',
    signupBonus: 'Free NFT entry',
    promoCode: 'LEDGER',
    features: ['L2 settlement', 'NFT prizes', 'Web3 login'],
    description:
      'Web3-native casino that settles bets on Base and Solana for sub-cent fees. Wallet-connect login means no KYC for most withdrawals up to 5 BTC.',
    pros: ['Sub-cent gas costs', 'Wallet-only login', 'Frequent NFT giveaways'],
    cons: ['No sportsbook yet', 'Small live-dealer library'],
    url: 'https://metawin.com/r/fairledger',
  },
  {
    id: 11,
    slug: 'goated',
    name: 'Goated',
    short: 'GTD',
    logoInitials: 'O',
    brandColor: '#FFC400',
    rating: 4.2,
    established: 2022,
    license: 'Curacao 8048/JAZ',
    payout: 'Instant',
    cryptos: ['BTC', 'ETH', 'LTC', 'SOL', 'USDT'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 11,
    weeklyBonus: '$30k weekly race',
    signupBonus: '11% flat rakeback',
    promoCode: 'FAIRLEDGER',
    features: ['Goated mascot', 'Streamer races', 'Originals'],
    description:
      'A brand-new operator with a clean UI, generous flat rakeback and a personality-driven community formed around its Goated mascot streamer events.',
    pros: ['Flat 11% rakeback', 'Polished streamer integrations', 'Gen-Z-friendly UX'],
    cons: ['Newer brand - smaller volume'],
    url: 'https://goated.com/?ref=fairledger',
  },
  {
    id: 12,
    slug: 'betfury',
    name: 'BetFury',
    short: 'BFR',
    logoInitials: 'F',
    brandColor: '#FFB300',
    rating: 4.0,
    established: 2019,
    license: 'Curacao master license',
    payout: '< 5 min',
    cryptos: ['BTC', 'ETH', 'LTC', 'TRX', 'BFG', 'USDT'],
    fiat: false,
    vpnFriendly: true,
    rakebackPct: 6,
    weeklyBonus: 'BFG dividends',
    signupBonus: 'Hourly faucet + box',
    promoCode: 'LEDGER',
    features: ['BFG token dividends', 'Sportsbook', 'Originals'],
    description:
      'Token-revenue model: stake BFG to earn a daily share of casino revenue. Hourly free faucet keeps the lobby alive even at 4am UTC.',
    pros: ['Native token dividends', 'Hourly free faucet', 'Strong sportsbook'],
    cons: ['Token volatility', 'Cluttered UI'],
    url: 'https://betfury.io/?r=fairledger',
  },
];

export interface BonusCode {
  id: string;
  casinoSlug: string;
  casinoName: string;
  brandColor: string;
  code: string;
  reward: string;
  type: 'no-deposit' | 'reload' | 'signup' | 'race' | 'free-spins';
  postedMinutesAgo: number;
  expiresInHours: number;
  verified: boolean;
}

export const liveBonusCodes: BonusCode[] = [
  {
    id: 'bc-001',
    casinoSlug: 'stake',
    casinoName: 'Stake',
    brandColor: '#1A2C38',
    code: 'FAIRLEDGER',
    reward: '200% deposit boost up to $1,000',
    type: 'signup',
    postedMinutesAgo: 3,
    expiresInHours: 168,
    verified: true,
  },
  {
    id: 'bc-002',
    casinoSlug: 'rainbet',
    casinoName: 'Rainbet',
    brandColor: '#00D26A',
    code: 'LEDGER15',
    reward: '15% flat rakeback - no wager required',
    type: 'reload',
    postedMinutesAgo: 9,
    expiresInHours: 720,
    verified: true,
  },
  {
    id: 'bc-003',
    casinoSlug: 'shuffle',
    casinoName: 'Shuffle',
    brandColor: '#F0B433',
    code: 'SHFLEDGER',
    reward: '$25 free chip on first deposit',
    type: 'no-deposit',
    postedMinutesAgo: 14,
    expiresInHours: 24,
    verified: true,
  },
  {
    id: 'bc-004',
    casinoSlug: 'roobet',
    casinoName: 'Roobet',
    brandColor: '#FFD600',
    code: 'ROOLEDGER',
    reward: '20% rakeback (lifetime)',
    type: 'reload',
    postedMinutesAgo: 22,
    expiresInHours: 720,
    verified: true,
  },
  {
    id: 'bc-005',
    casinoSlug: 'gamdom',
    casinoName: 'Gamdom',
    brandColor: '#FF5A5F',
    code: 'GMDLEDGER',
    reward: 'Free $5 chip + 13% rakeback',
    type: 'no-deposit',
    postedMinutesAgo: 27,
    expiresInHours: 24,
    verified: true,
  },
  {
    id: 'bc-006',
    casinoSlug: 'rollbit',
    casinoName: 'Rollbit',
    brandColor: '#E80A89',
    code: 'RLBLEDGER',
    reward: 'Free NFT rakeback pack (Tier 1)',
    type: 'free-spins',
    postedMinutesAgo: 35,
    expiresInHours: 12,
    verified: true,
  },
  {
    id: 'bc-007',
    casinoSlug: 'bcgame',
    casinoName: 'BC.Game',
    brandColor: '#FFB94B',
    code: 'BCLEDGER',
    reward: '300% boost on first 4 deposits',
    type: 'signup',
    postedMinutesAgo: 41,
    expiresInHours: 168,
    verified: true,
  },
  {
    id: 'bc-008',
    casinoSlug: 'duelbits',
    casinoName: 'Duelbits',
    brandColor: '#F2A900',
    code: 'DUELEDGER',
    reward: 'Weekly $50 race entry',
    type: 'race',
    postedMinutesAgo: 53,
    expiresInHours: 168,
    verified: true,
  },
  {
    id: 'bc-009',
    casinoSlug: 'metawin',
    casinoName: 'MetaWin',
    brandColor: '#21C7B5',
    code: 'MWNLEDGER',
    reward: 'Free NFT prize draw entry',
    type: 'no-deposit',
    postedMinutesAgo: 67,
    expiresInHours: 48,
    verified: true,
  },
  {
    id: 'bc-010',
    casinoSlug: 'cloudbet',
    casinoName: 'Cloudbet',
    brandColor: '#00B26F',
    code: 'CLDLEDGER',
    reward: '100% match up to 5 BTC',
    type: 'signup',
    postedMinutesAgo: 84,
    expiresInHours: 720,
    verified: true,
  },
  {
    id: 'bc-011',
    casinoSlug: 'goated',
    casinoName: 'Goated',
    brandColor: '#FFC400',
    code: 'GTDLEDGER',
    reward: 'Free spins on Goated Original slots',
    type: 'free-spins',
    postedMinutesAgo: 95,
    expiresInHours: 96,
    verified: true,
  },
  {
    id: 'bc-012',
    casinoSlug: 'betfury',
    casinoName: 'BetFury',
    brandColor: '#FFB300',
    code: 'BFGLEDGER',
    reward: '500 BFG bonus + 6% rakeback',
    type: 'reload',
    postedMinutesAgo: 112,
    expiresInHours: 240,
    verified: true,
  },
];

export interface AnalyticsRow {
  rank: number;
  casinoSlug: string;
  casinoName: string;
  brandColor: string;
  depositVolume: number;
  depositChange: number;
  marketShare: number;
  deposits: number;
  uniqueDepositors: number;
  newDepositors: number;
}

export const analytics30d: AnalyticsRow[] = [
  {
    rank: 1,
    casinoSlug: 'stake',
    casinoName: 'Stake',
    brandColor: '#1A2C38',
    depositVolume: 1_642_977_327,
    depositChange: 9.92,
    marketShare: 48.06,
    deposits: 2_254_427,
    uniqueDepositors: 533_844,
    newDepositors: 346_858,
  },
  {
    rank: 2,
    casinoSlug: 'roobet',
    casinoName: 'Roobet',
    brandColor: '#FFD600',
    depositVolume: 332_370_090,
    depositChange: -15.64,
    marketShare: 9.72,
    deposits: 581_195,
    uniqueDepositors: 53_221,
    newDepositors: 27_509,
  },
  {
    rank: 3,
    casinoSlug: 'rainbet',
    casinoName: 'Rainbet',
    brandColor: '#00D26A',
    depositVolume: 245_856_746,
    depositChange: 6.43,
    marketShare: 7.19,
    deposits: 412_811,
    uniqueDepositors: 71_204,
    newDepositors: 38_910,
  },
  {
    rank: 4,
    casinoSlug: 'shuffle',
    casinoName: 'Shuffle',
    brandColor: '#F0B433',
    depositVolume: 188_412_900,
    depositChange: 22.11,
    marketShare: 5.51,
    deposits: 271_488,
    uniqueDepositors: 49_822,
    newDepositors: 31_006,
  },
  {
    rank: 5,
    casinoSlug: 'bcgame',
    casinoName: 'BC.Game',
    brandColor: '#FFB94B',
    depositVolume: 167_084_771,
    depositChange: -3.18,
    marketShare: 4.89,
    deposits: 318_206,
    uniqueDepositors: 64_010,
    newDepositors: 22_414,
  },
  {
    rank: 6,
    casinoSlug: 'gamdom',
    casinoName: 'Gamdom',
    brandColor: '#FF5A5F',
    depositVolume: 142_800_511,
    depositChange: 4.55,
    marketShare: 4.18,
    deposits: 198_451,
    uniqueDepositors: 33_287,
    newDepositors: 14_220,
  },
  {
    rank: 7,
    casinoSlug: 'cloudbet',
    casinoName: 'Cloudbet',
    brandColor: '#00B26F',
    depositVolume: 121_544_982,
    depositChange: 1.04,
    marketShare: 3.55,
    deposits: 102_771,
    uniqueDepositors: 19_904,
    newDepositors: 6_018,
  },
  {
    rank: 8,
    casinoSlug: 'duelbits',
    casinoName: 'Duelbits',
    brandColor: '#F2A900',
    depositVolume: 109_322_181,
    depositChange: 8.74,
    marketShare: 3.20,
    deposits: 178_902,
    uniqueDepositors: 27_104,
    newDepositors: 11_008,
  },
  {
    rank: 9,
    casinoSlug: 'rollbit',
    casinoName: 'Rollbit',
    brandColor: '#E80A89',
    depositVolume: 94_201_450,
    depositChange: -7.81,
    marketShare: 2.76,
    deposits: 153_018,
    uniqueDepositors: 32_004,
    newDepositors: 9_404,
  },
  {
    rank: 10,
    casinoSlug: 'metawin',
    casinoName: 'MetaWin',
    brandColor: '#21C7B5',
    depositVolume: 73_109_222,
    depositChange: 28.40,
    marketShare: 2.14,
    deposits: 88_410,
    uniqueDepositors: 18_902,
    newDepositors: 12_016,
  },
  {
    rank: 11,
    casinoSlug: 'goated',
    casinoName: 'Goated',
    brandColor: '#FFC400',
    depositVolume: 58_400_811,
    depositChange: 41.22,
    marketShare: 1.71,
    deposits: 71_400,
    uniqueDepositors: 14_220,
    newDepositors: 9_018,
  },
  {
    rank: 12,
    casinoSlug: 'betfury',
    casinoName: 'BetFury',
    brandColor: '#FFB300',
    depositVolume: 41_220_002,
    depositChange: -2.41,
    marketShare: 1.21,
    deposits: 88_440,
    uniqueDepositors: 19_004,
    newDepositors: 4_011,
  },
];

export interface LeaderboardRow {
  rank: number;
  player: string;
  avatar: string;
  wagered: number;
  prize: number;
  casino: string;
  brandColor: string;
}

export const leaderboard: LeaderboardRow[] = [
  { rank: 1, player: 'wh4le_doctor', avatar: 'WD', wagered: 18_402_188, prize: 8_000, casino: 'Stake', brandColor: '#1A2C38' },
  { rank: 2, player: 'crypto_king88', avatar: 'CK', wagered: 14_802_018, prize: 4_000, casino: 'Rainbet', brandColor: '#00D26A' },
  { rank: 3, player: 'lambo.eth', avatar: 'LE', wagered: 12_044_882, prize: 2_000, casino: 'Shuffle', brandColor: '#F0B433' },
  { rank: 4, player: 'satoshi_jr', avatar: 'SJ', wagered: 9_201_445, prize: 1_500, casino: 'Roobet', brandColor: '#FFD600' },
  { rank: 5, player: 'plinko_phil', avatar: 'PP', wagered: 8_120_004, prize: 1_000, casino: 'Stake', brandColor: '#1A2C38' },
  { rank: 6, player: 'mines_mistress', avatar: 'MM', wagered: 7_004_211, prize: 750, casino: 'Gamdom', brandColor: '#FF5A5F' },
  { rank: 7, player: 'crash.king', avatar: 'CK', wagered: 6_540_910, prize: 500, casino: 'BC.Game', brandColor: '#FFB94B' },
  { rank: 8, player: 'dice.daddy', avatar: 'DD', wagered: 6_004_101, prize: 400, casino: 'Cloudbet', brandColor: '#00B26F' },
  { rank: 9, player: 'roulette_ron', avatar: 'RR', wagered: 5_018_009, prize: 300, casino: 'Duelbits', brandColor: '#F2A900' },
  { rank: 10, player: 'spin.queen', avatar: 'SQ', wagered: 4_404_250, prize: 200, casino: 'MetaWin', brandColor: '#21C7B5' },
];

export interface BetFeedItem {
  id: string;
  player: string;
  casino: string;
  brandColor: string;
  game: string;
  bet: number;
  multiplier: number;
  payout: number;
  secondsAgo: number;
}

export const betFeed: BetFeedItem[] = [
  { id: 'bf-1', player: 'wh4le_doctor', casino: 'Stake', brandColor: '#1A2C38', game: 'Sweet Bonanza 1000', bet: 50, multiplier: 1247.5, payout: 62_375, secondsAgo: 6 },
  { id: 'bf-2', player: 'crypto_king88', casino: 'Rainbet', brandColor: '#00D26A', game: 'Gates of Olympus', bet: 100, multiplier: 821.25, payout: 82_125, secondsAgo: 14 },
  { id: 'bf-3', player: 'lambo.eth', casino: 'Shuffle', brandColor: '#F0B433', game: 'Crash', bet: 200, multiplier: 38.41, payout: 7_682, secondsAgo: 22 },
  { id: 'bf-4', player: 'plinko_phil', casino: 'Stake', brandColor: '#1A2C38', game: 'Plinko', bet: 25, multiplier: 1000.0, payout: 25_000, secondsAgo: 31 },
  { id: 'bf-5', player: 'mines_mistress', casino: 'Gamdom', brandColor: '#FF5A5F', game: 'Mines', bet: 75, multiplier: 421.78, payout: 31_633, secondsAgo: 45 },
  { id: 'bf-6', player: 'crash.king', casino: 'BC.Game', brandColor: '#FFB94B', game: 'Crash', bet: 500, multiplier: 12.40, payout: 6_200, secondsAgo: 58 },
  { id: 'bf-7', player: 'dice.daddy', casino: 'Cloudbet', brandColor: '#00B26F', game: 'Dice', bet: 1000, multiplier: 4.95, payout: 4_950, secondsAgo: 71 },
  { id: 'bf-8', player: 'roulette_ron', casino: 'Duelbits', brandColor: '#F2A900', game: 'Lightning Roulette', bet: 250, multiplier: 500.0, payout: 125_000, secondsAgo: 88 },
  { id: 'bf-9', player: 'spin.queen', casino: 'MetaWin', brandColor: '#21C7B5', game: 'Wanted Dead or a Wild', bet: 30, multiplier: 1822.0, payout: 54_660, secondsAgo: 104 },
  { id: 'bf-10', player: 'satoshi_jr', casino: 'Roobet', brandColor: '#FFD600', game: 'Sugar Rush 1000', bet: 80, multiplier: 712.5, payout: 57_000, secondsAgo: 122 },
];

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readMin: number;
  category: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'crypto-casino-deposit-volume-q1-2026',
    title: 'Crypto casino deposit volume hits record $3.4B in Q1 2026',
    excerpt:
      'Q1 2026 was the largest quarter ever recorded by FairLedger trackers, driven by Stake, Rainbet and a 41% jump from emerging brands. Here is the breakdown.',
    author: 'Mira Holst',
    date: '2026-04-22',
    readMin: 8,
    category: 'Analytics',
    tag: 'Quarterly Report',
  },
  {
    slug: 'how-to-verify-provably-fair-stake-roobet',
    title: 'How to verify a provably fair round in 30 seconds (Stake, Roobet, Rainbet)',
    excerpt:
      'A step-by-step walkthrough of taking a server seed, client seed and nonce, hashing them with SHA256 and confirming the result with our verifier.',
    author: 'Daniel Ng',
    date: '2026-04-18',
    readMin: 6,
    category: 'Guides',
    tag: 'Provably Fair',
  },
  {
    slug: 'rakeback-vs-cashback-vs-vip',
    title: 'Rakeback vs cashback vs VIP: which loyalty program actually pays?',
    excerpt:
      'We modeled $50k of weekly play across the top 12 casinos and ran the numbers on each loyalty model. The winners surprised us.',
    author: 'Mira Holst',
    date: '2026-04-12',
    readMin: 11,
    category: 'Bonuses',
    tag: 'Loyalty',
  },
  {
    slug: 'kyc-free-casinos-the-real-list',
    title: 'KYC-free crypto casinos: the real list (and the limits per operator)',
    excerpt:
      'Most "no KYC" lists are out of date. Here is what every major casino actually requires in 2026, with verified withdrawal thresholds before ID is requested.',
    author: 'Saira Patel',
    date: '2026-04-05',
    readMin: 9,
    category: 'Guides',
    tag: 'KYC',
  },
  {
    slug: 'sportsbook-odds-margins-compared',
    title: 'Crypto sportsbook margins compared: who actually pays the best price?',
    excerpt:
      'We pulled 10,000 EPL, NBA and UFC markets across the top six crypto sportsbooks and computed the true overround per book.',
    author: 'Daniel Ng',
    date: '2026-03-28',
    readMin: 7,
    category: 'Sports',
    tag: 'Odds Analysis',
  },
  {
    slug: 'self-exclusion-tools-2026',
    title: 'Self-exclusion tools at every major crypto casino in 2026',
    excerpt:
      'A reference table of every self-exclusion option, cooling-off period and deposit-limit setting. If you need to take a break, this is the page to bookmark.',
    author: 'Saira Patel',
    date: '2026-03-21',
    readMin: 5,
    category: 'Responsible Play',
    tag: 'Wellbeing',
  },
];

export const totalDepositVolume30d = analytics30d.reduce((sum, row) => sum + row.depositVolume, 0);
export const totalDeposits30d = analytics30d.reduce((sum, row) => sum + row.deposits, 0);
export const totalUniqueDepositors30d = analytics30d.reduce((sum, row) => sum + row.uniqueDepositors, 0);
