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
    const currentTab = sections[currentTabIndex]
    let sectionTitles = sections.map((section, index) =>
      <button key={index} onClick={() => this.clickHandler(index)}>{section.title}</button>)
    let sectionContent = sections.map((section)=>
      <p>{section.content}</p>)
    return (
      <ul>
        <li>
          {sectionTitles}
          {currentTab.sectionContent}
        </li>
      </ul>
    )
  }
}


export default Accordion