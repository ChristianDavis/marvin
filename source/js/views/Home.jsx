import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment, decrement } from 'actions/app';

@connect(state => ({
  counter: state.app.get('counter'),
}))
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
  }

  handleIncrement = () => {
    const { dispatch } = this.props;
    dispatch(increment());
  }

  handleDecrement = () => {
    const { dispatch } = this.props;
    dispatch(decrement());
  }

  render() {
    const {
      counter,
    } = this.props;

    return (
      <div className='Home'>
        <div className='Example'>
          <p>Counter: { counter }</p>
          <button onClick={ this.handleIncrement }>
            Increase
          </button>
          <button onClick={ this.handleDecrement }>
            Decrease
          </button>
        </div>

      </div>
    );
  }
}
