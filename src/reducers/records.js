
import { ADD_RECORD, EDIT_RECORD, RECEIVE_RECORD, RECEIVE_RECORDS, UPDATE_RECORD,DELETED_RECORD } from "../actions"

const record = (state = { }, action) => {
  switch (action.type) {
    case EDIT_RECORD:
        return Object.assign({}, state, { header: { isDirty: true } });
    case RECEIVE_RECORD:
        let record = Object.assign({}, state, { body: action.record.body , header: { isFetching: false } });
        return record;
    case UPDATE_RECORD:
        let x =  Object.assign({}, state, { body: action.record.body , header: { isDirty: false } });
        return x;
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_RECORDS:
      return action.records;
    case UPDATE_RECORD:
      if (state.map((t) => t.body.key).includes(action.record.body.key)) {
        return state.map((t) => { if (t.body.key === action.record.body.key) { return record(t, action); } else { return t; }});
      } else {
        return [ ...state, action.record];
      }
    case DELETED_RECORD:
        return state.filter(record => record.body.key !== action.key);
    case EDIT_RECORD:
    case RECEIVE_RECORD:
      return state.map((t) => { if (t.body.key === action.record.body.key) { return record(t, action); } else { return t; }});
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
