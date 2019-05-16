import React from 'react';
import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Root from './components/Root';
import { fetchAuthenticated} from './actions/account';
import './index.css';

const store=createStore(
  rootReducer,
  compose( 
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.dispatch(fetchAuthenticated())
  .then(()=>{
    render(
      <Provider store={store}>
        <Root></Root>
      </Provider>,
      document.getElementById('root')
    );
});

