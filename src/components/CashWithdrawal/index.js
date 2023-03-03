// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {Amount: 2000}

  onClickButton1 = value => {
    console.log(value)
    this.setState(prevState => ({
      Amount: prevState.Amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {Amount} = this.state

    return (
      <div className="container0">
        <div className="container1">
          <div className="cont-para-heading">
            <p className="para-style">S</p>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="para-container">
            <p className="paragraph">Your Balance</p>
            <p className="para2">
              {Amount}
              <br />
              <span className="span">In Rupees</span>
            </p>
          </div>
          <p className="para2">Withdraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-container1">
            {denominationsList.map(eachItem => (
              <DenominationItem
                buttonDetails={eachItem}
                onClickButton1={this.onClickButton1}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
