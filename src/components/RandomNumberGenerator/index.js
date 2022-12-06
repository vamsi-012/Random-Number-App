// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onChangeRandomNum = () => {
    const ranNum = Math.floor(Math.random() * 101)
    this.setState({randomNumber: ranNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.onChangeRandomNum}
            className="generate-btn"
          >
            Generate
          </button>
          <p className="random-num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
