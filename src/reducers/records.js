
import _ from "lodash"
import { ADD_RECORD, EDIT_RECORD, RECEIVE_RECORD, RECEIVE_RECORDS, UPDATE_RECORD,DELETED_RECORD } from "../actions"

const record = (state = {}, action) => {
  switch (action.type) {
    case EDIT_RECORD: 
        var statechange = { 'state' : { 'isDirty' : true } };
        return _.merge({}, state, statechange); 
    case RECEIVE_RECORD: 
        var statechange = { 'state' : { 'isFetching' : false, 'isDirty' : false }, 'body' : action.record.body };        
        return _.merge({}, state, statechange)        
    case UPDATE_RECORD:   
        var statechange = { 'state' : { 'isFetching' : true }, 'body' : action.record.body };
        return _.merge({}, state, statechange); 
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RECORDS:
        return action.records;
    case UPDATE_RECORD:
      if (state.map((t) => t.key).includes(action.record.key)) {
        return state.map((t) => { if ( t.key === action.record.key) { return record(t, action); } else { return t; }});
      } else {        
        return [...state, action.record];       
      }
    case DELETED_RECORD:
        return state.filter(record => record.key !== action.key);
    case EDIT_RECORD:
    case RECEIVE_RECORD:
        return state.map((t) => { if ( t.key === action.record.key) { return record(t, action); } else { return t; }});
    default:
        return state;
  }
}

export default records