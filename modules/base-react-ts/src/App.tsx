import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { increment, decrement, incrementAsync, decrementAsync } from 'redux/counter';

function App(): JSX.Element {
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
		<div className="app">
			<header className="app-header">
				<img
					src={logo}
					className="app-logo"
					alt="logo"
				/>
				<Counter
					onIncrement={incrementHandler}
					onDecrement={decrementHandler}
					onIncrementAsync={incrementAsyncHandler}
					onDecrementAsync={decrementAsyncHandler}
					value={value}
				/>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="app-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<p>{process.env.REACT_APP_ENV_NAME}</p>
		</div>
	);
}

export default App;
