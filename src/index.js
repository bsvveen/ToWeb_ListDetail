
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import rootReducer from './reducers'
import App from './components/app'

let store = createStore(
  rootReducer,  applyMiddleware(thunkMiddleware),  window.devToolsExtension ? window.devToolsExtension() : f => f )render(    <Provider store={store}>
        <App/>
    </Provider>,    document.getElementById('root'));
