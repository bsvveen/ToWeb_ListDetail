
import _ from "lodash"
import { INSERTING_RECORD, INSERTED_RECORD, EDIT_RECORD, UPDATING_RECORD, UPDATED_RECORD, DELETING_RECORD, DELETED_RECORD, GETTING_RECORDS, GOT_RECORDS } from "../actions"

const record = (state = {}, action) => {
  var statechange;
  switch (action.type) {  
    case INSERTED_RECORD:           
    case GOT_RECORDS: 
        statechange = { 'state' : { 'isFetching' : false, 'isValidated': false, 'isDirty' : false} };   
        return _.merge({}, state, statechange);     
    case EDIT_RECORD: 
        statechange = { 'state' : { 'isFetching' : false, 'isValidated': false, 'isDirty' : true} };   
        return _.merge({}, state, statechange);     
    case UPDATING_RECORD:   
        statechange = { 'state' : { 'isFetching' : true, 'isValidated': false, 'isDirty' : true} };    
        return _.merge({}, state, statechange); 
    case UPDATED_RECORD:   
        statechange = { 'state' : { 'isFetching' : false, 'isValidated': true, 'isDirty' : false} };    
        return _.merge({}, action.record, statechange);  
    default:
        return state;
  }
}

const records = (state = [], action) => { 
  switch (action.type) {
    case GOT_RECORDS:        
        return action.records((t) => { return record(t, action); });   
    case DELETED_RECORD:
        return state.filter(record => record.key !== action.key);
    case INSERTED_RECORD:
        return [...state, record(action.record, action)];
    case UPDATING_RECORD:        
    case EDIT_RECORD:
    case UPDATED_RECORD:
        return state.map((t) => { if ( t.key === action.key) { return record(t, action); } else { return t; }});        
    default:
        return state;
  }
}

export default records