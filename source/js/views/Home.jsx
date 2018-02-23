import React, { Component } from 'react';

/* TODO: Implement the button component */
import Button from 'components/global/Button';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      saved: []
    };
  }

  handleIncrement = () => {
    /* Implement Increment function */
    this.setState({ counter: this.state.counter + 1 });
  }

  handleDecrement = () => {
    /* Implement Decrement function */
    this.setState({ counter: this.state.counter - 1 });
  }

  handleSave = () => {
    /* Implement Save function */
    const list = this.state.saved;
    this.setState({ saved: [...this.state.saved, this.state.counter] });
  }

  render() {
    const { counter, saved } = this.state;
    return (
      <div className='Home'>
        <div className='Example'>
          <p>Counter: { counter }</p>
          <button onClick={ this.handleIncrement } >Increase</button>
          <button onClick={ this.handleDecrement } >Decrease</button>
          <button onClick={ this.handleSave } >Save Current Number</button>
          {/* Buttons go here */}
        </div>
        <hr />
        <p style={ { textDecoration: 'underline' } }>Saved Numbers</p>
        <ul>
          { saved.map((number, idx) => <li key={idx}>{ number }</li>)}
        </ul>
      </div>
    );
  }
}
