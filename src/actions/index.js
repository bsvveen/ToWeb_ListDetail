
import httpRequest from '../helpers/xmlHttpRequest'

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
  var key = createGuid();
  return {
    type: NEW_RECORD,
    key: key, record: { state: { isFetching: false, isValidated: false, isDirty: false, hasError: false, errors:[] },  body: { key: key, title: 'A new record' } }
  }
}

export const editRecord = (record) => {
  return {
    type: EDIT_RECORD,
    record
  }
}

export const receiveRecord = (key, record) => {
  return {
    type: RECEIVE_RECORD,
    key, record
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

export const deletingRecord = (key, record) => {
  return {
    type: DELETING_RECORD,
    key, record
  }
}

export const deletedRecord = (key) => {
  return {
    type: DELETED_RECORD,
    key
  }
}

export function deleteRecord(key, record) {

    console.log('deleteRecord: ', record);

    return function (dispatch) {

      dispatch(deletingRecord(key, record));

      return fetch(apiUrl + '?key=' + key, {
          method: 'DELETE',
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }          
        })
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(deletedRecord(record.key)))
        .catch(error => dispatch(receiveError(error)))
    }
}

export const updatingRecord = (key, record) => {
  return {
    type: UPDATE_RECORD,
    key, record
  }
}

export function updateRecord(key, record) {

    console.log('updateRecord: ', record);

    return function (dispatch) {

      dispatch(updatingRecord(key, record));

      return httpRequest('Poco').post(record.body).then(
        json => dispatch(receiveRecord(key, JSON.parse(json)))
      );        
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
