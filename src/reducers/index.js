
import { combineReducers } from 'redux'
import records from './records'
import filter from './filter'

const rootReducer = combineReducers({
  records,
  filter
})

export default rootReducer
