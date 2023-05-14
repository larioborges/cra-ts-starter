import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
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
      <Button
        variant="contained"
        onClick={onIncrement}
        className="button"
      >
        <Add fontSize="small" />
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={onDecrement}
        className="button"
      >
        - Decrement
      </Button>
      <Button
        variant="outlined"
        onClick={onIncrementAsync}
        className="button"
      >
        <Add fontSize="small" />
        Increment in 1 second
      </Button>
      <Button
        variant="outlined"
        onClick={onDecrementAsync}
        className="button"
      >
        - Decrement in 1 second
      </Button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
