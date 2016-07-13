// greet component...
import React from 'react'

export default class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h3>Good {this.props.timeOfDay}, {this.props.object}!</h3>
        <p>So good!</p>
      </div>
      )
  }
}

