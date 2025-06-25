import  { FC } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { Coin } from './utils/coinHelpers';
interface Props {
  coins: Coin[];
  onViewAll?: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export const FuturisticMarketSection: FC<Props> = ({ coins, onViewAll }) => (
  <motion.section
    id="markets"
    className="py-24 bg-[rgba(0,0,0,0.8)] backdrop-blur-sm text-white"
    initial="hidden"
    animate="show"
    variants={containerVariants}          
  >
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
        <motion.h2
          className="text-5xl font-orbitron text-cyan-300 drop-shadow-lg"
          variants={cardVariants}
        >
          Market Overview
        </motion.h2>
        <motion.button
          onClick={onViewAll}
          className="mt-6 sm:mt-0 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-black font-bold px-6 py-3 rounded-full tracking-wide transition"
          variants={cardVariants}
        >
          View All Markets
        </motion.button>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
      >
        {coins.map((coin) => (
          <motion.div key={coin.symbol} variants={cardVariants}>
            <Tilt
              glareEnable
              glareColor="#00ffff"
              glareMaxOpacity={0.2}
              scale={1.02}
              transitionSpeed={400}
              className="bg-gray-900 bg-opacity-60 rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 flex-shrink-0 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 p-1">
                  <img
                    src={coin.img}
                    alt={coin.symbol}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{coin.symbol}</h3>
                  <p className="text-sm text-gray-400">{coin.name}</p>
                </div>
              </div>

              <p className="text-3xl font-extrabold mb-2">${coin.price}</p>
              <p
                className={`font-medium mb-4 ${
                  parseFloat(coin.change24hr) >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {coin.change24hr}% (24h)
              </p>

              <div className="h-28">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={coin.sparklineData.map((v, idx) => ({
                      idx,
                      value: v,
                    }))}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <Tooltip
                      contentStyle={{ background: '#1e293b', border: 0 }}
                      labelFormatter={() => ''}
                      formatter={(val: number) => `$${val.toFixed(2)}`}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={
                        parseFloat(coin.change24hr) >= 0
                          ? '#38A169'
                          : '#E53E3E'
                      }
                      strokeWidth={3}
                      dot={false}
                      animationDuration={1500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);
 