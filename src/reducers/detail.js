
import {  NEW_RECORD, EDIT_RECORD, SAVING_RECORD  } from "../actions"

const detail = (state = {}, action) => {
  switch (action.type) {
    case NEW_RECORD:
        return { header: { isFetching: false, isValidated: false },  body: { key: createGuid(), title: 'A new record' } };
    case EDIT_RECORD:
        return action.record;
    case SAVING_RECORD:
        return {};
    default:
        return state;
  }
}

export default detail

function createGuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
