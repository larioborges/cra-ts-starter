import { appReducer } from './app/';
import { counterReducer } from './counter/';

const rootReducer = {
	counter: counterReducer,
	app: appReducer,
};

export default rootReducer;
