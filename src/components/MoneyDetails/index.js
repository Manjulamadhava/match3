import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <div>
      <button className="but1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">RS {balance} </p>
      </button>
      <button className="but2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">RS {income} </p>
      </button>
      <button className="but3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">RS {expense} </p>
      </button>
    </div>
  )
}

export default MoneyDetails
