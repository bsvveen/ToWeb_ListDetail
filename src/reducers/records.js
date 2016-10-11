
import { ADD_RECORD, EDIT_RECORD, UPDATE_RECORD, GETTING_RECORDS, SAVING_RECORD, RECEIVE_RECORD, RECEIVE_RECORDS  } from "../actions"

const record = (state = { isFetching: false, isDirty: false, record }, action) => {
  switch (action.type) {
    case ADD_RECORD:
        return Object.assign({}, state, {
            header: { isFetching: false, isDirty: false },
            body: { key: createGuid(), title: 'A new record' }
        });
    case EDIT_RECORD:
        if (state.body.key === action.key) {
          return Object.assign({}, state, { header: { isDirty: true } });
        }

        return state;
    case RECEIVE_RECORD:
      if (state.body.key === action.record.key) {
        return Object.assign({}, state, { body: action.record });
      }

      return state;
    case SAVING_RECORD:
          if (state.body.key === action.record.key) {
            var newState =  Object.assign({}, state, { header: { isFetching: true }, body: action.record });
            return newState;
          }

          return state;
    case RECEIVE_RECORD:
          if (state.body.key === action.record.key) {
            return Object.assign({}, state, { header: { isFetching: false }, body: action.record });
          }

          return state;
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
          return [ ...state, record(undefined, action)];
    case EDIT_RECORD:
    case SAVING_RECORD:
    case UPDATE_RECORD:
    case RECEIVE_RECORD:
        return state.map(t => record(t, action))
    default:
        return state;
  }
}

export default records

// private

function createGuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
