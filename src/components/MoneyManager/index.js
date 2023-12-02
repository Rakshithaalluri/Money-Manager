import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'

import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    inputTitle: '',
    inputAmount: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({
      inputTitle: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      inputAmount: event.target.value,
    })
  }

  onChangeOptionId = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onAddAmountButton = event => {
    event.preventDefault()
    const {inputTitle, inputAmount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransactionHistory = {
      id: v4(),
      title: inputTitle,
      amount: parseInt(inputAmount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransactionHistory],
      inputTitle: '',
      inputAmount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransactionHistory = id => {
    const {transactionList} = this.state
    const filteredHistory = transactionList.filter(
      eachHistory => eachHistory.id !== id,
    )
    this.setState({
      transactionList: filteredHistory,
    })
  }

  getExpensesAmount = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncomeAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {inputAmount, inputTitle, optionId, transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncomeAmount()
    const expensesAmount = this.getExpensesAmount()

    return (
      <div className="container">
        <div className="bg-container">
          <div className="money-manager-container">
            <h1 className="money-manager-heading"> Hi, Richard </h1>
            <p className="money-manager-welcome-text">
              Welcome back to your{' '}
              <span className="money-text"> Money Manager </span>
            </p>
          </div>
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />

          <div className="add-transaction-history-container">
            <div className="add-transaction-container">
              <form className="transaction-text-container">
                <h1 className="transaction-heading"> Add Transaction </h1>
                <label className="title" htmlFor="tran-title">
                  {' '}
                  TITLE{' '}
                </label>
                <input
                  type="text"
                  placeholder="TITLE"
                  className="input"
                  id="tran-title"
                  onChange={this.onChangeTitle}
                  value={inputTitle}
                />
                <label className="title" htmlFor="tran-amount">
                  {' '}
                  AMOUNT{' '}
                </label>
                <input
                  type="text"
                  placeholder="AMOUNT"
                  className="input"
                  id="tran-amount"
                  onChange={this.onChangeAmount}
                  value={inputAmount}
                />
                <p className="title"> TYPE </p>
                <select
                  className="option-text"
                  id="select"
                  value={optionId}
                  onChange={this.onChangeOptionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="add-button"
                  onClick={this.onAddAmountButton}
                >
                  Add
                </button>
              </form>
            </div>

            <div className="add-history-container">
              <div className="transaction-history-container">
                <h1 className="transaction-heading"> History </h1>
                <ul>
                  <div className="history-details-container">
                    <p className="history-title-text"> Title </p>
                    <p className="history-amount-text"> Amount </p>
                    <p className="history-amount-text"> Type </p>
                  </div>
                  {transactionList.map(eachTransactionHistory => (
                    <TransactionItem
                      key={eachTransactionHistory.id}
                      eachHistory={eachTransactionHistory}
                      deleteHistory={this.onDeleteTransactionHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
