import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state = [], action) => {
    console.log('hello from feelingReducer-index');
    if (action.type === 'SET_FEELING') {
        return action.payload;
    }
    return Number(state);
}

const understandingReducer = (state = [], action) => {
    console.log('hello from understandingReducer-index');
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    }
    return Number(state);
}

const supportReducer = (state = [], action) => {
    console.log('hello from supportReducer-index');
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    }
    return Number(state);
}

const commentsReducer = (state = [], action) => {
    console.log('hello from commentsReducer-index');
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
