import { appReducer } from './app';
import { counterReducer } from './counter/slice';

const rootReducer = {
	counter: counterReducer,
	app: appReducer,
};

export default rootReducer;
