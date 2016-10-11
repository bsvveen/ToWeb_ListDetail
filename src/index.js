
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,  { filter: 'SHOW_ALL', isfetching: false, records: [ { header: { isFetching: false, isDirty: false }, body: { key: '567183f4-f3d7-48a6-8057-aa00802fc9f2', title: 'Initial record'} } ] },  composeEnhancers(applyMiddleware(thunkMiddleware,logger,diffMiddleware)))render(    <Provider store={store}>
        <App/>
    </Provider>,    document.getElementById('root'));
