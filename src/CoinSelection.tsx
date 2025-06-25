import  { useState, useRef, useEffect } from 'react';
import throttle from 'lodash/throttle';
import { Coin } from './utils/coinHelpers';
interface Props {
  coins: Coin[];
  index: number;
  setIndex: (i: number) => void;
}

const CoinSelection: React.FC<Props> = ({ coins, index, setIndex }) => {
  const [savedScroll, setSavedScroll] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleScroll = throttle(() => {
    if (!wrapperRef.current) return;
    const optionHeight = wrapperRef.current.firstElementChild!.clientHeight + 20;
    const newIndex = Math.floor(wrapperRef.current.scrollTop / optionHeight);
    setIndex(newIndex);
  }, 200);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = index * (wrapperRef.current.firstElementChild!.clientHeight + 20);
    }
  }, [index]);

  return (
    <div
      id="coin-selection"
      onMouseLeave={() => wrapperRef.current && (wrapperRef.current.scrollTop = savedScroll)}
    >
      <div
        id="coin-options-wrapper"
        ref={wrapperRef}
        className="scroll-bar"
        onScroll={() => {
          setSavedScroll(wrapperRef.current!.scrollTop);
          handleScroll();
        }}
      >
        <div id="coin-options">
          {coins.map((coin, i) => (
            <div
              key={coin.symbol}
              className={`coin-option ${i === index ? 'selected' : ''}`}
            >
              <div
                className="coin-option-icon"
                style={{ backgroundImage: `url(${coin.img})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinSelection; 