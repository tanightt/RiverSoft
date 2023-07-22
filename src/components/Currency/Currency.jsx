import { useSelector } from 'react-redux';
import css from './Currency.module.css';
import {
  selectEURRateBuy,
  selectEURRateSell,
  selectUSDRateBuy,
  selectUSDRateSell,
} from 'redux/currency/currencySelectors';

import diagram from '../../images/Diagram-currency-1.png';
import diagramThin from '../../images/Diagram-currency-2.png';

const Currency = () => {
  const usdBuy = useSelector(selectUSDRateBuy);
  const usdSell = useSelector(selectUSDRateSell);
  const eurBuy = useSelector(selectEURRateBuy);
  const eurSell = useSelector(selectEURRateSell);

  const currencies = {
    usdPurchase: usdBuy ? usdBuy.toFixed(2) : '36.65',
    usdSale: usdSell ? usdSell.toFixed(2) : '37.50',
    eurPurchase: eurBuy ? eurBuy.toFixed(2) : '41.10',
    eurSale: eurSell ? eurSell.toFixed(2) : '42.30',
  };

  return (
    <div className={css.currencyWrapper}>
      <table className={css.currencyTable}>
        <thead>
          <tr>
            <th className={css.leftSide}>Currency</th>
            <th>Purchase</th>
            <th className={css.rightSide}>Sale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={css.leftSide}>USD</td>
            <td>{currencies.usdPurchase}</td>
            <td className={css.rightSide}>{currencies.usdSale}</td>
          </tr>
          <tr>
            <td className={css.leftSide}>EUR</td>
            <td>{currencies.eurPurchase}</td>
            <td className={css.rightSide}>{currencies.eurSale}</td>
          </tr>
        </tbody>
      </table>
      <div className={css.diagramWrapper}>
        <img className={css.diagramIconMax} src={diagram} alt="Diagram" />
        <img
          className={css.diagramIconMin}
          src={diagramThin}
          alt="Currency diagram"
        />
        <span className={css.USD}>{currencies.usdSale}</span>
        <span className={css.EUR}>{currencies.eurSale}</span>
      </div>
    </div>
  );
};
export default Currency;
