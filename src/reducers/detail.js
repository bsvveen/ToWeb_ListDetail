
import {  EDIT_RECORD, SAVING_RECORD  } from "../actions"

const detail = (state = {}, action) => {
  switch (action.type) {
    case EDIT_RECORD:
        return action.record;
    case SAVING_RECORD:
        return {};
    default:
        return state;
  }
}

export default detail
