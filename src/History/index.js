import {Component} from 'react'
import HistoryItem from '../HistoryItem'
import './index.css'

class History extends Component {
  constructor(props) {
    super(props)
    this.state = {
      historyListItems: props.historyList,
      searchHistoryItems: props.historyList,
      searchInput: '',
    }
  }

  showHistoryItems = () => {
    const {searchHistoryItems} = this.state
    if (searchHistoryItems.length > 0) {
      return (
        <ul className="history-items">
          {searchHistoryItems.map(eachHistory => (
            <HistoryItem
              deleteHistory={this.deleteHistory}
              key={eachHistory.id}
              historyItem={eachHistory}
            />
          ))}
        </ul>
      )
    }
    return <p className="no-history">There is no history to show</p>
  }

  deleteHistory = id => {
    const {historyListItems, searchInput} = this.state
    const filteredHistory = historyListItems.filter(
      eachHistory => eachHistory.id !== id,
    )
    const remainFilter = filteredHistory.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({
      historyListItems: filteredHistory,
      searchHistoryItems: remainFilter,
    })
  }

  onChangeSearch = event => {
    const {value} = event.target
    this.setState({searchInput: value}, () => {
      this.filterHistory()
    })
  }

  filterHistory = () => {
    const {historyListItems, searchInput} = this.state
    const searchHistory = historyListItems.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    this.setState({searchHistoryItems: searchHistory})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="input-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              className="input"
              onChange={this.onChangeSearch}
              value={searchInput}
              type="search"
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="history-container">{this.showHistoryItems()}</div>
      </div>
    )
  }
}

export default History
