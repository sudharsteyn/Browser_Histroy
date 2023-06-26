import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem
  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <p className="history-time">{timeAccessed}</p>
      <div className="history-info">
        <div className="history-site-info">
          <img className="history-app-icon" src={logoUrl} alt="domain logo" />
          <div className="history-site">
            <p className="site-name">{title}</p>
            <p className="site">{domainUrl}</p>
          </div>
        </div>
        <button
          className="delete-btn"
          data-testid="delete"
          onClick={onDelete}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
