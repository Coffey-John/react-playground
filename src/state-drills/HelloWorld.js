import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    // console.log('props in constructor', props)
    super(props)
    this.state = {
      who: 'world'
    }

  }

  handleWorldButtonClick = () => {
    this.setState({
      who: 'world!'
    })
  }

  handleReactButtonClick = () => {

    this.setState({
      who: 'React!'
    })
  }

  handleFriendButtonClick = () => {

    this.setState({
      who: 'Friend!'
    })
  }

  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={this.handleWorldButtonClick}>
          World
        </button>
        <button onClick={this.handleFriendButtonClick}>
          Friend
        </button>
        <button onClick={this.handleReactButtonClick}>
          React
        </button>
      </div>
    )
  }
}
export default HelloWorld;
