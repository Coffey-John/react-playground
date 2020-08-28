import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    console.log('props in constructor', props)
    super(props)
    this.state = {
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

  render() {
    let message
      if (this.state.spinningTheChamber) {
       message =  <p>spinning the chamber and pulling the trigger! ...</p>
      } else if (this.state.chamber === this.state.bulletInChamber) {
        message =  <p>you're safe!</p>
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