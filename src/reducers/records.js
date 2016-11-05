
import { ADD_RECORD, EDIT_RECORD, RECEIVE_RECORD, RECEIVE_RECORDS  } from "../actions"

const record = (state = { }, action) => {
  switch (action.type) {
    case EDIT_RECORD:
        if (state.body.key === action.key) {
          return Object.assign({}, state, { header: { isDirty: true } });
        }
        return Object.assign({}, state, { header: { isDirty: false } });
    case RECEIVE_RECORD:
          if (state.body.key === action.record.key) {
            return Object.assign({}, state, { header: { isDirty: false, isValidated: true, isFetching: false }, body: action.record });
          }
          return state;
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
      var header = { isValidated: false, isFetching: false, isDirty: false };
      return [ ...state,  new Record(header, action.record)];    
    case RECEIVE_RECORDS:
      var header = { isValidated: true, isFetching: false };
      return action.records.map(t =>  new Record(header, t));
    case EDIT_RECORD:
    case RECEIVE_RECORD:
          return state.map(t => record(t, action));
    default:
        return state;
  }
}

export default records

// private

function Record(header, body) {
  this.header = header;
  this.body = body;
}
