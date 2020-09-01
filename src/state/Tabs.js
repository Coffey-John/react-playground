import React from "react";















class Tabs extends React.Component {
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

  renderButtons() {
    const { tabs } = this.props
    return tabs.map((tab, index) => (
      <button key={index} onClick={() => this.clickHandler(index)}>
        {tab.name}
      </button>
    ))
  }






  renderContent() {
    const currentTab = this.props.tabs[0]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }





  render() {
    const {tabs} = this.props
    return (
      <div>
        {this.renderButtons()}
        {tabs.length && this.renderContent()}
      </div>
    )
  }
}
export default Tabs;