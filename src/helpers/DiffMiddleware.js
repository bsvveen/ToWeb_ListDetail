
import { sendRecordToAPI } from '../actions';

const diffMiddleware = store => next => action => {

    console.log('Starting diffMiddleware');

    const { getState, dispatch } = store;
    // Get state before
    const before = getState();
    // Transition to the next state
    const results = next(action);
    // Get state after
    const after = getState();

    if (before.records !== after.records) {
        console.log('diffMiddleware:  store changed');
        store.dispatch(sendRecordToAPI(action.record));
    }

    return results;
};

export default diffMiddleware
