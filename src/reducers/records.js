
import { ADD_RECORD_TO_STORE, EDIT_RECORD  } from "../data/constants"

const record = (state = {}, action) => {
  switch (action.type) {
    case ADD_RECORD_TO_STORE:
      return Object.assign({}, state, {
        key: createGuid(),
        title: action.record.title,
        record: action.record
      })
    case EDIT_RECORD:
      if (state.key !== action.key) { return state }

      return Object.assign({}, state, {
        isDirty: true
      })
    default:
      return state
  }
}

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_RECORD_TO_STORE:
      return [
        ...state,
        record(undefined, action)
      ]
    case EDIT_RECORD:
      return state.map(t =>
        record(t, action)
      )
    default:
      return state
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
