import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItemData} = props
  const {currencyName, currencyLogo, usdValue, euroValue} = cryptoItemData

  return (
    <li className="crypto-item">
      <div className="currency-name-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="item-text">{currencyName}</p>
      </div>
      <p className="usd-value item-text">{usdValue}</p>
      <p className="euro-value item-text">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
