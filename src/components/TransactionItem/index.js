// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachHistory, deleteHistory} = props
  const {title, amount, type, id} = eachHistory

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-detailed-container">
      <p className="history-title"> {title} </p>
      <p className="history-info"> {amount} </p>
      <p className="history-info"> {type} </p>
      <button
        className="button"
        type="button"
        onClick={onDeleteHistory}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}

export default TransactionItem
