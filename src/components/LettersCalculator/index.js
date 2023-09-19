// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChangeLetters = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-label" className="label">
            Enter the phrase
          </label>
          <input
            id="input-label"
            className="input"
            placeholder="Enter the phrase"
            type="text"
            value={count}
            onChange={this.onChangeLetters}
          />
          <div className="count-container">
            <p className="count">No.of letters: {count.length}</p>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
