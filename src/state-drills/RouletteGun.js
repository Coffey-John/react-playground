import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {

    console.log('props in constructor', props)
    super(props)
    this.state = {
      bulletInChamber: this.props.bulletInChamber,
      chamber: null,
      spinningTheChamber: false
    }
this.clickHandler = this.clickHandler.bind(this)
  }

clickHandler() {
  this.setState({
    spinningTheChamber: true
   })
  this.timeout = setTimeout(() => {
    console.log('setTimeout')
    let randomNumber = Math.ceil(Math.random() * 8)
    console.log(randomNumber)
   this.setState({

    chamber: randomNumber,
    spinningTheChamber: false,
   })
  }, 2000)
}

componentWillUnmount() {
  clearTimeout(this.timeout)
}

  render() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    console.log(this.state.bulletInChamber)
    let message
      if (spinningTheChamber) {
       message =  'spinning the chamber and pulling the trigger! ...'
      } else if (chamber === bulletInChamber) {
        message =  'BANG!!!!'
      } else {
        message = `you're safe!`
      }

      return (
      <div>
        <p>{message}</p>
        <button onClick={this.clickHandler}>Pull the trigger!</button>
      </div>
    )
  }
}
export default RouletteGun;