import React from 'react'

class Accordion extends React.Component {
  static defaultProps = {
    tabs: []
  }

  state = {
    currentTabIndex: 0
  }

  clickHandler(index) {
    this.setState ({
      currentTabIndex: index
    })
  }




  render() {
    const {sections} = this.props
    const currentTab = sections[this.state.currentTabIndex]
    let sectionTitles = sections.map((section, index) =>
      <button key={index} onClick={() => this.clickHandler(index)}>{section.title}</button>)
    let sectionContent = sections.map((section, index)=>
      <p>{section.content}</p>)
    return (
      <ul>
        <li>
          {sectionTitles}
          {sectionContent[currentTab]}
        </li>
      </ul>
    )
  }
}


export default Accordion