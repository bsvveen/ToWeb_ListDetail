
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'

import thunkMiddleware from 'redux-thunk'
import diffMiddleware from './helpers/diffMiddleware'

import rootReducer from './reducers'
import App from './components/app'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  { filter: 'SHOW_ALL', isfetching: false },
  composeEnhancers(applyMiddleware(thunkMiddleware,logger,diffMiddleware))
)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
