import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: true, heads: 0, total: 0, tails: 0}

  onTossBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        toss: true,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        toss: false,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    }
  }

  displayImage = () => {
    const {toss} = this.state

    const imageUrl = toss
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return imageUrl
  }

  render() {
    const image = this.displayImage()
    const {heads, tails, total} = this.state

    return (
      <div className="bg-container">
        <div className="coin-con">
          <h1 className="head">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="coin-img" />
          <button type="button" className="btn" onClick={this.onTossBtn}>
            Toss Coin
          </button>
          <div className="stats-con">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
