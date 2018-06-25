import React from 'react'
import BasicExample from './BasicExample'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    return <BasicExample name={this.state.name} />
  }
}
