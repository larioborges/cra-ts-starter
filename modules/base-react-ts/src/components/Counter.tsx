import React from 'react';
import { CounterProps } from 'types';

const Counter: React.FC<CounterProps> = ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
  onDecrementAsync,
}): JSX.Element => {
  return (
    <div>
      <button
        onClick={onIncrementAsync}
        className="button"
      >
        Increment after 1 second
      </button>{' '}
      <button
        onClick={onDecrementAsync}
        className="button"
      >
        Decrement after 1 second
      </button>{' '}
      <button
        onClick={onIncrement}
        className="button"
      >
        + Increment
      </button>{' '}
      <button
        onClick={onDecrement}
        className="button"
      >
        - Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
