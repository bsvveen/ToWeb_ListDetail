
import { combineReducers } from 'redux'
import records from './records'
import filter from './filter'
import isfetching from './fetching'
import detail from './detail'

const rootReducer = combineReducers({
  records,
  detail,
  filter,
  isfetching
})

export default rootReducer
