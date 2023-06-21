import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyList extends Component {
  state = {currenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesData()
  }

  getCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(item => ({
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      id: item.id,
      currencyLogo: item.currency_logo,
    }))
    this.setState({currenciesData: updatedData, isLoading: false})
  }

  renderCurrenciesList = () => {
    const {currenciesData} = this.state

    return (
      <>
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-img"
        />
        <div className="table-container">
          <div className="table-header-container">
            <p className="table-header-title">Coin Type</p>
            <p className="table-header-title usd">USD</p>
            <p className="table-header-title euro">EURO</p>
          </div>
          <ul className="currencies-list-items-container">
            {currenciesData.map(item => (
              <CryptocurrencyItem
                key={item.currencyName}
                cryptoItemData={item}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
