import React, {Component} from 'react'

class Adventurous extends Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit() {
    const adventurousTerms = ['cake', 'steak', 'cookies', 'ice cream', 'thai food', 'good pizza', 'vietnamese', 'korean', 'bbq'];
    const randomTerm = adventurousTerms[Math.floor(Math.random() * adventurousTerms.length)];
    console.log(randomTerm)
    this.props.onClick(randomTerm);
  }

  render() {
    return(
      <button onClick={this._handleSubmit}>
        Adventurous!
      </button>
    )
  }
}

export default Adventurous
