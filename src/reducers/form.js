
import { SEND_FORM, RECEIVE_FORM  } from "../data/constants"

function post(state = {}, action)
{
  switch (action.type) {
    case SEND_FORM:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_FORM:
      return Object.assign({}, state, {
        isFetching: false,
        title: action.title,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default post
