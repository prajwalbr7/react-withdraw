// Write your code here
import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {buttonDetails, onClickButton1} = this.props
    const {value} = buttonDetails
    const onChangeState = () => {
      onClickButton1(value)
    }
    return (
      <li className="container-list">
        <button
          className="button-container"
          type="button"
          onClick={onChangeState}
        >
          {value}
        </button>
      </li>
    )
  }
}
export default DenominationItem
