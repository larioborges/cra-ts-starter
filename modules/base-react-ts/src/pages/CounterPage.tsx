import CounterComp from 'components/Counter';
import React from 'react';
import { decrement, decrementAsync, increment, incrementAsync } from 'redux/counter';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const CounterPage: React.FC<{}> = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(state => state.counter);

  const incrementHandler = (): void => {
    dispatch(increment());
  };

  const decrementHandler = (): void => {
    dispatch(decrement());
  };

  const incrementAsyncHandler = (): void => {
    void dispatch(incrementAsync());
  };

  const decrementAsyncHandler = (): void => {
    void dispatch(decrementAsync());
  };

  return (
    <CounterComp
      onIncrement={incrementHandler}
      onDecrement={decrementHandler}
      onIncrementAsync={incrementAsyncHandler}
      onDecrementAsync={decrementAsyncHandler}
      value={value}
    />
  );
};

export default CounterPage;
