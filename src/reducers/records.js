
import { ADD_RECORD, EDIT_RECORD, UPDATE_RECORD  } from "../data/constants"
import update from 'react'

const record = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECORD:
        if (action.record.key === undefined) {
          return Object.assign({}, action.record, {
              key: createGuid()
          });
        }

        if (state.key !== action.record.key)
        {
          return state;
        }

        return action.record;
    case EDIT_RECORD:
        if (state.key !== action.key) {
          return Object.assign({}, state, {
            isDirty: false
          });
        }

        return Object.assign({}, state, {
          isDirty: true
        });
    default:
        return state;
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD:
        if (action.record.key === undefined) {
          return [
            ...state,
            record(undefined, action)
          ]
        }

        return state.map(t => record(t, action))
    case EDIT_RECORD:
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
