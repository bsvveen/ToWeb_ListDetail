
import { GETTING_RECORDS, RECEIVING_RECORDS } from "../actions"

const isFetching = (state = false, action) => {
  switch (action.type) {
    case GETTING_RECORDS:
      return true;
    case RECEIVING_RECORDS:
        return false;
    default:
      return state
  }
}

export default isFetching
