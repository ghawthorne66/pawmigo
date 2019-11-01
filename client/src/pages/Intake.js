import React, { Component } from 'react';
import Intake from "./Intake";


class Intake extends Component {
    state = {
        fields: {}
    };

    onChange = updatedValue => {
        this.setState({
            fields: {
                
            }
        })
    }

  render() {
    return (
      <div className="container">
        <h1>This is the Intake page!</h1>
      </div>
    )
  }
}

export default Intake;