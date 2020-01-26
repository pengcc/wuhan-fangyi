import React, { Component } from "react";
import Controls from "../components/controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum, resetCounter } from "../actions/counter-actions";

export class Controller extends Component {

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    resetCount: payload => {
      dispatch(resetCounter(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(Controls);
