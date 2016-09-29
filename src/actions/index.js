
import fetch from 'isomorphic-fetch'
import { apiUrl, SET_FILTER, ADD_RECORD, EDIT_RECORD, UPDATE_RECORD, RECEIVE_RECORD, RECEIVE_ERROR } from "../data/constants"

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const addRecord = (record) => {
  return {
    type: ADD_RECORD,
    record
  }
}

export const editRecord = (key) => {
  return {
    type: EDIT_RECORD,
    key
  }
}

export const updateRecord = (record) => {
  return {
    type: UPDATE_RECORD,
    record
  }
}

export const receiveRecordFromAPi = (record) => {
  return {
    type: RECEIVE_RECORD,
    record
  }
}

export const receiveErrorFromAPi = (error) => {
  console.log('receiveErrorFromAPi: ', record);
  return {
    type: RECEIVE_ERROR,
    error
  }
}

export function sendRecordToAPI(record) {
  return function (dispatch, record) {
    return fetch(apiUrl, { method: 'POST', body: { 'key' : record.key, 'record' : record }})
      .then(response => response.json())
      .then(json => dispatch(receiveRecordFromAPi(json)))
      .catch(error => dispatch(receiveErrorFromAPi(error)))
  }
}
