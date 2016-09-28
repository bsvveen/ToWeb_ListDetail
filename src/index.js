
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import diffMiddleware from './helpers/diffMiddleware'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers'
import App from './components/app'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

let store = createStore(
  rootReducer,  applyMiddleware(thunkMiddleware,logger,diffMiddleware))render(    <Provider store={store}>
        <App/>
    </Provider>,    document.getElementById('root'));
