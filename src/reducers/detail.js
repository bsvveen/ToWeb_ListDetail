
import {  NEW_RECORD, EDIT_RECORD, UPDATE_RECORD  } from "../actions"

const detail = (state = {}, action) => {
  switch (action.type) {
    case NEW_RECORD:        
    case EDIT_RECORD:
        return action.record;
    case UPDATE_RECORD:
        return {};
    default:
        return state;
  }
}

export default detail
