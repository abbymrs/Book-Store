import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/user.reducer';

const loggerMiddleware = createLogger();

export default createStore(
    rootReducer,
    applyMiddleware(thunk, loggerMiddleware)
)