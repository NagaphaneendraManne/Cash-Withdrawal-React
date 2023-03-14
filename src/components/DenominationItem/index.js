// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denom-Item">
      <button type="button" className="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
