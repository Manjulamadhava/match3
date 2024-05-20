const TranscationItem = props => {
  const {information, onDeleting} = props
  const {id, titleInput, amountInput, type} = information
  const onDelete = () => {
    onDeleting(information)
  }
  return (
    <li>
      <p>{titleInput}</p>
      <p>{amountInput}</p>
      <p>{type}</p>
      <button data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          onClick={onDelete}
        />
      </button>
    </li>
  )
}

export default TranscationItem
