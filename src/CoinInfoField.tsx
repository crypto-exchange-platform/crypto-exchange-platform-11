
interface Props {
  value: string;
  label: string;
}

const CoinInfoField: React.FC<Props> = ({ value, label }) => (
  <div className="coin-info-field">
    <div className="value"><h1>{value}</h1></div>
    <div className="label"><h1>{label}</h1></div>
  </div>
);

export default CoinInfoField; 