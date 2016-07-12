// hello world component...
import React from 'react'

export default class HelloWorld extends React.Component {
  render() {
    return <p>Hello {this.props.name}!</p>
  }
}