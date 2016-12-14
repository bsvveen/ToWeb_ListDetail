
import fetch from 'isomorphic-fetch'

import { apiUrl } from '../data/constants'

export const SET_FILTER = 'SET_FILTER';
export const NEW_RECORD = 'NEW_RECORD';
export const ADD_RECORD = 'ADD_RECORD';
export const EDIT_RECORD = 'EDIT_RECORD';
export const DELETED_RECORD = 'DELETED_RECORD';
export const DELETING_RECORD = 'DELETING_RECORD';
export const RECEIVE_RECORD = 'RECEIVE_RECORD';
export const RECEIVE_RECORDS = 'RECEIVE_RECORDS';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const UPDATE_RECORD = 'UPDATE_RECORD';
export const GETTING_RECORDS = 'GETTING_RECORDS';

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const newRecord = () => {
  console.log('action newRecord');
  return {
    type: NEW_RECORD,
    record: { key: createGuid(), state: { isFetching: false, isValidated: false, isDirty: false, hasError: false, errors:[] },  body: { title: 'A new record' } }
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

export const deletingRecord = (record) => {
  return {
    type: DELETING_RECORD,
    record
  }
}

export const deletedRecord = (key) => {
  return {
    type: DELETED_RECORD,
    key
  }
}

export function deleteRecord(record) {

    console.log('deleteRecord: ', record);

    return function (dispatch) {

      dispatch(deletingRecord(record));

      return fetch(apiUrl + '?key=' + record.key, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }          
        })
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(deletedRecord(record.key)))
        .catch(error => dispatch(receiveError(error)))
    }
}

export const updatingRecord = (record) => {
  return {
    type: UPDATE_RECORD,
    record
  }
}

export function updateRecord(record) {

    console.log('updateRecord: ', record);

    return function (dispatch) {

      dispatch(updatingRecord(record));

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

function createGuid()
{
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
