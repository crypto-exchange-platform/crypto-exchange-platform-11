import { FC, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  snippet: string;
  url: string;
  image: string;
}

const mockForexNews: NewsItem[] = [
  {
    id: 1,
    title: 'EUR/USD Rallies On ECB Rate Hopes',
    source: 'Reuters',
    time: '2h ago',
    snippet:
      'Euro climbs against the dollar after ECB minutes signal potential rate hike…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3J5cHRvfGVufDB8fDB8fHww',
  },
  {
    id: 2,
    title: 'USD/JPY Slides Amid BOJ Intervention Talk',
    source: 'Bloomberg',
    time: '3h ago',
    snippet:
      'Yen strengthens as rumors swirl about possible BOJ market intervention…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 3,
    title: 'GBP/USD Eyes Breakout Over 1.25',
    source: 'CNBC',
    time: '4h ago',
    snippet:
      'Cable tests key resistance level as UK inflation data shows moderation…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 4,
    title: 'AUD/USD Up On Commodity Rally',
    source: 'AFX',
    time: '5h ago',
    snippet:
      'Australian dollar benefits from rising iron ore and coal prices…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3J5cHRvfGVufDB8fDB8fHww',
  },
  {
    id: 5,
    title: 'USD/CAD Flat Ahead Of OPEC Meeting',
    source: 'Financial Times',
    time: '6h ago',
    snippet:
      'Loonie holds steady as oil market watches OPEC+ production decision…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3J5cHRvfGVufDB8fDB8fHww',
  },
  {
    id: 6,
    title: 'NZD/USD Gains As RBNZ Signals Hawkish Stance',
    source: 'MarketWatch',
    time: '7h ago',
    snippet:
      'Kiwi bucks up on central bank’s hint at higher-for-longer rates…',
    url: '#',
    image: 'https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ForexNewsSection: FC = () => {
  const [search, setSearch] = useState('');
  const filtered = mockForexNews.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.section
      id="forex-news"
      className="py-20 bg-forex-news text-white overflow-hidden"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Search */}
        <motion.div variants={cardVariants}>
          <input
            type="text"
            placeholder="Search headlines…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 bg-gray-800 bg-opacity-60 rounded-lg focus:outline-none placeholder-gray-400 text-white"
          />
        </motion.div>

        {/* Header */}
        <motion.h2
          className="text-4xl font-bold text-center flicker"
          variants={cardVariants}
        >
          Latest Forex News
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filtered.map(news => (
            <Tilt
              key={news.id}
              glareEnable
              glareColor="rgba(6,182,212,0.3)"
              glareMaxOpacity={0.2}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              transitionSpeed={400}
              className="card-anim bg-gray-800 bg-opacity-60 rounded-lg overflow-hidden border border-gray-700"
            >
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col h-full">
                  <h3 className="font-semibold text-lg mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-grow">
                    {news.snippet}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{news.source}</span>
                    <span>{news.time}</span>
                  </div>
                  <a
                    href={news.url}
                    className="mt-3 self-start text-cyan-300 hover:underline glow-button"
                  >
                    Read more →
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ForexNewsSection;
 