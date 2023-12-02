// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-text-container">
          <p className="balance-text"> Your Balance </p>
          <p className="balance-amount" data-testid="balanceAmount">
            {' '}
            Rs {balanceAmount}{' '}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="balance-text-container">
          <p className="balance-text"> Your Income </p>
          <p className="balance-amount" data-testid="incomeAmount">
            {' '}
            Rs {incomeAmount}{' '}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="balance-text-container">
          <p className="balance-text"> Your Expenses </p>
          <p className="balance-amount" data-testid="expensesAmount">
            {' '}
            Rs {expensesAmount}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
