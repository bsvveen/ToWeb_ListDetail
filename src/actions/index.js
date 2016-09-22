
import fetch from 'isomorphic-fetch'
import { apiUrl, SET_FILTER, ADD_RECORD, EDIT_RECORD, UPDATE_RECORD, RECEIVE_RECORDS } from "../data/constants"

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

export const requestRecordsFromWebAPi = () => {
  return function (dispatch) {

    return fetch(apiUrl + 'GetAll', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => dispatch(receiveRecordsFromWebAPi(json))
      )
    }
}

export const receiveRecordsFromWebAPi = (records) => {
  return {
    type: RECEIVE_RECORDS,
    records
  }
}

export const postRecordToWebApi = (record) => {
  return function (dispatch) {
    return fetch(apiUrl + 'Post/' + record.key, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(record)
    }).then(response => response.json())
      .then(json => dispatch(receiveRecordFromWebAPi(json))
      )
    }
}

export const receiveRecordFromWebAPi = (record) => {
  return {
    type: RECEIVE_RECORD,
    record
  }
}
