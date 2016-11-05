
import fetch from 'isomorphic-fetch'

import { apiUrl } from '../data/constants'

export const SET_FILTER = 'SET_FILTER';
export const NEW_RECORD = 'NEW_RECORD';
export const ADD_RECORD = 'ADD_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';
export const RECEIVE_RECORD = 'RECEIVE_RECORD';
export const RECEIVE_RECORDS = 'RECEIVE_RECORDS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const SAVING_RECORD = 'SAVE_RECORD';
export const GETTING_RECORDS = 'GETTING_RECORDS';

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const newRecord = (record) => {
  console.log('action newRecord');
  return {
    type: NEW_RECORD
  }
}

export const addRecord = (record) => {
  return {
    type: ADD_RECORD,
    record
  }
}

export const editRecord = (record) => {
  return {
    type: EDIT_RECORD,
    record
  }
}

export const receiveRecord = (record) => {
  return {
    type: RECEIVE_RECORD,
    record
  }
}

export const receiveRecords = (records) => {
  return {
    type: RECEIVE_RECORDS,
    records
  }
}

export const receiveError = (error) => {
  console.log('receiveErrorFromAPi: ', error);
  return {
    type: RECEIVE_ERROR,
    error
  }
}

export const savingRecord = (record) => {
  return {
    type: SAVING_RECORD,
    record
  }
}

export function saveRecord(record) {

    console.log('saveRecord: ', record);

    return function (dispatch) {

      dispatch(savingRecord(record));
      dispatch(addRecord(record));

      return fetch(apiUrl, {
          method: 'POST',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
        		Key: record.key,
        		Record: JSON.stringify(record)
        	})
        })
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(receiveRecord(JSON.parse(json))))
        .catch(error => dispatch(receiveError(error)))
    }
}

export const gettingRecords = () => {
  return {
    type: GETTING_RECORDS
  }
}

export function getRecords() {

    console.log('getRecords');

    return function (dispatch) {
      dispatch(gettingRecords());
      return fetch(apiUrl, {
          method: 'GET',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        })
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(receiveRecords(JSON.parse(json))))
        .catch(error => dispatch(receiveError(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
