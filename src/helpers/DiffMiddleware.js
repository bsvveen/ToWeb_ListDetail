
import { Map } from 'immutable';
import compare from './compare-immutable-maps';
import fetch from 'isomorphic-fetch'
import { apiUrl } from "../data/constants"

export diffMiddleware = store => next => action => {
    const { getState, dispatch } = store;
    // Get state before
    const before = getState();
    // Transition to the next state
    const results = next(action);
    // Get state after
    const after = getState();

    if (before.records !== after.records) {
        diffRecords(before.records, after.records);
    }

    return results;
};

function diffRecords(before: Map, after: Map): Array<Object> {
    // `compare` is some kind of algorithm to find adds / removals / modifications
    const patches = compare(before, after).forEach(patch => {
        const { key, value, op } = patch;

        switch (op) {
            case 'add':

                dispatch(sendRecordToAPI(value)

                return fetch(apiUrl + 'record', { method: 'POST' })
                  .then(response => response.json())
                  .then(json => dispatch(receiveRecordFromAPi(json)))
                  .catch(error => dispatch(receiveRecordFromAPi(error)))

                break;
            case 'replace':
                // Update a record

                break;
            case 'remove':
                // Delete a record

                break;
        }
    });

    return patches;
}


