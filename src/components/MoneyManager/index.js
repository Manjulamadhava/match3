import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TranscationItem from '../TransactionItem'

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

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expense: 0,
    titleInput: '',
    amountInput: '',
    initial: [],
    type: 'INCOME',
  }

  onTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onAmount = event => {
    this.setState({amountInput: event.target.value})
  }
  onSelect = event => {
    this.setState({type: event.target.value})
  }

  onAdd = event => {
    event.preventDefault()
    const {amountInput, titleInput, type} = this.state
    const newItem = {
      id: uuidv4(),
      amountInput,
      titleInput,
      type,
    }
    this.setState(prevstate => ({initial: [...prevstate.initial, newItem]}))
    if (type === 'INCOME') {
      this.setState(prevstate => ({
        income: prevstate.income + amountInput,
        balance: prevstate.income - prevstate.expense,
        amountInput: '',
        titelInput: '',
      }))
    } else {
      this.setState(prevstate => ({
        expense: prevstate.expense + amountInput,
        balance: prevstate.income - prevstate.expense,
        amountInput: '',
        titleInput: '',
      }))
    }
  }

  onDeleting = information => {
    const {initial} = this.state
    const {id, amountInput,type}=information
    const filtered = initial.filter(details => details.id !== id)
    this.setState({initial: filtered})

    if (type === 'INCOME') {
      this.setState(prevstate => ({
        income: prevstate.income -amountInput,
        balance: prevstate.income - prevstate.expense,
        amountInput: '',
        titleInput: '',
      }))
    } else {
      this.setState(prevstate => ({
        expense: prevstate.expense - amountInput,
        balance: prevstate.income - prevstate.expense,
        amountInput: '',
        titleInput: '',
      }))
    }
  }
  render() {
    const {balance, income, expense, titleInput, amountInput, initial} =
      this.state
    return (
      <div className="back">
        <div className="back1">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails balance={balance} income={income} expense={expense} />
        <div>
          <form onSubmit={this.onAdd}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              id="title"
              value={titleInput}
              onChange={this.onTitle}
              type="text"
              placeholder="TITLE"
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              value={amountInput}
              onChange={this.onAmount}
              type="amount"
              placeholder="AMOUNT"
            />
            <select onClick={this.onSelect}>
              {transactionTypeOptions.map(details => (
                <option key={details.optionId} value={details.optionId}>
                  {details.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add</button>
          </form>
        </div>
        <div>
          <h1>History</h1>
          <div>
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
          </div>
          <ul>
            {initial.map(details => (
              <TranscationItem
                key={details.id}
                information={details}
                onDeleting={this.onDeleting}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
