import React, { Component } from 'react';

/* TODO: Implement the button component */
import Button from 'components/global/Button';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    /* Implement Increment function */
  }

  handleDecrement = () => {
    /* Implement Decrement function */
  }

  handleSave = () => {
    /* Implement Save function */
  }

  render() {
    const { counter } = this.state;
    return (
      <div className='Home'>
        <div className='Example'>
          <p>Counter: { counter }</p>
          {/* Buttons go here */}
        </div>
        <hr />
        <p style={ { textDecoration: 'underline' } }>Saved Numbers</p>
        {/* Saved numbers go here */}
      </div>
    );
  }
}
