import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onClicked: PropTypes.func,
  title: PropTypes.string.isRequired
}
export default class MyComp extends React.Component {

  constructor(props) {
    super(props)

  }
  componentWillMount() {
    console.log('Will Mount')
  }
  componentDidMount() {
    console.log('Did Mount')
  }


  render() {
    const {title, name, onClick } = this.props

    return (
      <div className="component">
        <h1> Title: {title} </h1>
        <h2> Name: {name} </h2>
        <div onClick={onClick}>Click me</div>
      </div>
    )
  }
}
MyComp.propTypes = propTypes
