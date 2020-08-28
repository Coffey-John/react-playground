import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    // console.log('props in constructor', props)
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = this.state.count + 1
      this.setState({
        count: newCount
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    console.log(this.state.count)
    if (this.state.count >= 8) {
      clearInterval(this.interval)
      return <div><p>BOOM!!</p></div>
    } else if (this.state.count % 2 !== 0) {
      return <div><p>tock</p></div>
    } else if (this.state.count % 2 === 0) {
      return <div><p>tick</p></div>
    } else {
      return (
        <div>
          <p>{this.state.count}</p>

        </div>
      )
    }
  }
}
export default Bomb;
