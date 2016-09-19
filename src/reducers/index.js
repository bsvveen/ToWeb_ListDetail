
import { combineReducers } from 'redux'
import form from './form'
import records from './records'
import filter from './filter'

const rootReducer = combineReducers({
  records,
  filter,
  form
})

export default rootReducer
