import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import Messge from './../components/Messge';

class MessageContainer extends Component {
  render() {
    var { message } = this.props;
    return (
      <Messge message={ message }/>
    );
  }
  
}
MessageContainer.ProtoTypes = {
  message :PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
   message: state.message
  }
}
export default connect(mapStateToProps, null)(MessageContainer);
