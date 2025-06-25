import { FC, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const INFO_ITEMS = [
  {
    title: 'Market Volatility',
    description:
      'Crypto can swing ±10% daily. Set stop-loss levels to protect your downside.',
  },
  {
    title: 'Real-Time Pricing',
    description:
      'Orders execute at live rates—expect slight slippage in high-traffic periods.',
  },
  {
    title: 'Trading Fees',
    description:
      'Network & exchange fees apply. Review them before placing large orders.',
  },
];

const chartData = [
  { time: '09:00', price: 16020 },
  { time: '09:30', price: 16050 },
  { time: '10:00', price: 15980 },
  { time: '10:30', price: 16010 },
  { time: '11:00', price: 16080 },
  { time: '11:30', price: 16040 },
  { time: '12:00', price: 16100 },
  { time: '12:30', price: 16070 },
  { time: '13:00', price: 16120 },
];

const sectionVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TradeSection: FC = () => {
  const [tab, setTab] = useState<'buy' | 'sell'>('buy');
  const [symbol, setSymbol] = useState('BTC');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${tab.toUpperCase()} ${amount} of ${symbol}`);
  };

  return (
    <motion.section
      id="trade"
      className="relative py-20 overflow-hidden bg-dark-squares text-white"
      initial="hidden"
      animate="show"
      variants={sectionVariants}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 space-y-12">
        <motion.h2
          className="text-4xl font-bold flicker"
          variants={itemVariants}
        >
          Trade
        </motion.h2>

        <motion.div
          className="card-anim w-full h-64 bg-gray-900 bg-opacity-50 p-4 rounded-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 30, bottom: 0, left: 0 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis
                dataKey="time"
                stroke="#aaa"
                tick={{ fill: '#ddd', fontSize: 12 }}
              />
              <YAxis
                domain={['dataMin', 'dataMax']}
                stroke="#aaa"
                tick={{ fill: '#ddd', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{ background: '#1f2937', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: number) => [
                  `$${value.toLocaleString()}`,
                  'Price',
                ]}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#06b6d4"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="space-y-4" variants={itemVariants}>
          <p className="text-gray-300">
            Before you trade, review these key points:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INFO_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                className="card-anim bg-gray-700 bg-opacity-60 p-5 rounded-lg border border-gray-600"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="flex space-x-4" variants={itemVariants}>
          {(['buy', 'sell'] as const).map((mode) => (
            <motion.button
              key={mode}
              onClick={() => setTab(mode)}
              className={`
                px-5 py-2 rounded-full font-medium glow-button
                ${
                  tab === mode
                    ? mode === 'buy'
                      ? 'bg-cyan-500 text-black'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-700 hover:bg-gray-600'
                }
              `}
              whileTap={{ scale: 0.9 }}
            >
              {mode === 'buy' ? 'Buy' : 'Sell'}
            </motion.button>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-1">
              Symbol
            </label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              placeholder="e.g. BTC"
              className="w-full px-3 py-2 bg-gray-900 rounded focus:outline-none"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold mb-1">
              Amount
            </label>
            <input
              type="number"
              step="any"
              min="0"
              value={amount || ''}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="e.g. 0.01"
              className="w-full px-3 py-2 bg-gray-900 rounded focus:outline-none"
              required
            />
          </motion.div>

          <motion.div
            className="flex items-end"
            variants={itemVariants}
          >
            <motion.button
              type="submit"
              className={`
                w-full py-2 font-bold rounded glow-button transition
                ${
                  tab === 'buy'
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-black'
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }
              `}
              whileTap={{ scale: 0.95 }}
            >
              {tab === 'buy' ? 'Buy Now' : 'Sell Now'}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default TradeSection;
 