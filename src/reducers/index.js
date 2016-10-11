
import { combineReducers } from 'redux'
import records from './records'
import filter from './filter'
import isfetching from './fetching'

const rootReducer = combineReducers({
  records,
  filter,
  isfetching
})

export default rootReducer
