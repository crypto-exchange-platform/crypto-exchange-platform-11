import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts';

export interface Holding {
  symbol: string;
  name: string;
  amount: number;        
  currentPrice: number;  
  value: number;         
  change24hr: number;    
  sparklineData: number[];
}

interface PortfolioSectionProps {
  holdings: Holding[];
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const COLORS = ['#06b6d4', '#38bdf8', '#22d3ee', '#0ea5e9', '#0284c7'];

export const PortfolioSection: FC<PortfolioSectionProps> = ({ holdings }) => {
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
  const pieData = holdings.map((h) => ({
    name: h.symbol,
    value: h.value,
  }));

  return (
    <motion.section
      id="portfolio"
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <motion.h2
          className="text-4xl font-bold mb-6 flicker"
          variants={cardVariants}
        >
          Your Portfolio
        </motion.h2>

        <motion.div
          className="text-2xl font-semibold"
          variants={cardVariants}
        >
          Total Value: <span className="text-cyan-400">${totalValue.toLocaleString()}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg card-anim"
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  innerRadius={60}
                  paddingAngle={4}
                  label
                >
                  {pieData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip
                  formatter={(value: number, name: string) => [
                    `$${value.toLocaleString()}`,
                    name,
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={cardVariants}
          >
            {holdings.map((h, idx) => (
              <motion.div
                key={h.symbol}
                className="bg-gray-800 p-4 rounded-lg flex items-center justify-between card-anim"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <h3 className="text-xl font-semibold">{h.symbol}</h3>
                  <p className="text-gray-400 text-sm">{h.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${h.value.toLocaleString()}</p>
                  <p className={`${h.change24hr >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {h.change24hr.toFixed(2)}%
                  </p>
                </div>
                <div className="w-24 h-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={h.sparklineData.map((v, i) => ({ i, v }))}>
                      <Line
                        type="monotone"
                        dataKey="v"
                        stroke={h.change24hr >= 0 ? '#38A169' : '#E53E3E'}
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
 