
import { ADD_RECORD, EDIT_RECORD, UPDATE_RECORD  } from "../data/constants"

const record = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECORD:
        return Object.assign({}, action.record, {
            key: createGuid(),
            title: 'A new record'
        });
    case EDIT_RECORD:
        if (state.key !== action.key) {
          return Object.assign({}, state, { isDirty: false });
        }

        return Object.assign({}, state, { isDirty: true });
    case UPDATE_RECORD:
          if (state.key !== action.record.key) {
              return Object.assign({}, state, { isDirty: false });
          }

          return Object.assign({}, action.record, { isDirty: false });
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
          return [
            ...state,
            record(undefined, action)
          ]
    case EDIT_RECORD:
    case UPDATE_RECORD:
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
