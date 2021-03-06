import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counterReducer';
import resultsReducer from './store/reducers/resultsReducer';

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log('[Middleware] dispatching action', action);
      const result = next(action);
      console.log('[Middleware] updated state', store.getState());
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({counterReducer, resultsReducer});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
