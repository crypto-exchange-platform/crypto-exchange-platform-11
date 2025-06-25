import CoinInfoField from './CoinInfoField';
import CoinSelection from './CoinSelection';
import { Coin, getColorClass } from './utils/coinHelpers';

interface CardProps {
  coins: Coin[];
  index: number;
  setIndex: (i: number) => void;
}

const Card: React.FC<CardProps> = ({ coins, index, setIndex }) => {
  const coin = coins[index];
  const colorClass = getColorClass(coin.color);

  return (
    <div id="card-wrapper" className={colorClass}>
      <div id="card">
        <div id="card-left" className="card-half">
          <div
            id="coin-icon"
            style={{ backgroundImage: `url(${coin.img})` }}
          />
          <div id="coin-symbol-vert"><h1>{coin.symbol}</h1></div>
          <CoinSelection coins={coins} index={index} setIndex={setIndex} />
        </div>
        <div id="card-right" className="card-half">
          <div id="card-right-contents">
            <div id="coin-header">
              <div id="coin-name"><h1>{coin.name}</h1></div>
              <div id="coin-symbol"><h1>{coin.symbol}</h1></div>
              <div id="coin-rank">
                <div className="label"><h1>Rank</h1></div>
                <div className="value"><h1>{coin.rank}</h1></div>
              </div>
            </div>
            <div id="coin-price">
              <div className="value"><h1>${coin.price}</h1></div>
              <div
                id="coin-change-24hr"
                className={parseFloat(coin.change24hr) >= 0 ? 'positive' : 'negative'}
              >
                <h1>{coin.change24hr}%</h1>
              </div>
            </div>
            <div id="coin-info">
              <CoinInfoField value={`$${coin.cap}`} label="Market Cap" />
              <CoinInfoField value={`$${coin.volume}`} label="Volume" />
              <CoinInfoField
                value={`${coin.circulating} ${coin.symbol}`}
                label="Circulating Supply"
              />
            </div>
            <div id="card-right-stripes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card; 