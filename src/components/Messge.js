import React, { Component } from 'react';

class Messge extends Component {
  render() {
    var {message} = this.props;
    return (
      <div>
         <h3>
                  <span className="badge amber darken-2">{message}</span>
              </h3>
        </div>
    );
  }
}

export default Messge;
