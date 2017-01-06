
import _ from "lodash"
import httpRequest from '../helpers/xmlHttpRequest'


// FILTER

export const SET_FILTER = 'SET_FILTER';

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

// NEW

export const INSERTING_RECORD = 'INSERTING_RECORD';

export const insertingRecord = () => {  
  return {
    type: INSERTING_RECORD    
  }
}

export const INSERTED_RECORD = 'INSERTED_RECORD';

export const insertedRecord = (newbody) => {  
  return {
    type: INSERTED_RECORD,
    record: { key: newbody.key, body: newbody }
  }
}

export function insertRecord() {
    return function (dispatch) {
      dispatch(insertingRecord()); 
      return httpRequest('Poco').post(data).then(newbody => dispatch(insertedRecord(record))); 
    }
}

// EDIT

export const EDIT_RECORD = 'EDIT_RECORD';

export const editRecord = (record) => {
  return {
    type: EDIT_RECORD,
    record
  }
}

// UPDATE

export const UPDATING_RECORD = 'UPDATING_RECORD';

export const updatingRecord = (record) => {
  return {
    type: UPDATING_RECORD,
    record
  }
}

export const UPDATED_RECORD = 'UPDATE_RECORD';

export const updatedRecord = (record, newbody) => {
  return {
    type: UPDATED_RECORD,
    record: { key: newbody.key, state: record.state,  body: newbody }
  }
}

export function updateRecord(record) {
    return function (dispatch) {

      dispatch(updatingRecord(record));
      
      var data =  _.merge({}, record.body, { 'key' : record.key }); 

      if (record.key)
        return httpRequest('Poco').put(data).then(newbody => dispatch(updatedRecord(record, newbody))); 

      return httpRequest('Poco').post(data).then(newbody => dispatch(updatedRecord(record, newbody))); 
    }
}

// DELETE

export const DELETING_RECORD = 'DELETING_RECORD';

export const deletingRecord = (record) => {
  return {
    type: DELETING_RECORD,
    record
  }
}

export const DELETED_RECORD = 'DELETED_RECORD';

export const deletedRecord = (key) => {
  return {
    type: DELETED_RECORD,
    key
  }
}

export function deleteRecord(key) {  
    return function (dispatch) {
      dispatch(deletingRecord(key));
      return httpRequest('Poco').delete(key).then(obj => dispatch(deletedRecord(key))); 
    }
}

// GET

export const GETTING_RECORDS = 'GETTING_RECORDS';

export const gettingRecords = () => {
  return {
    type: GETTING_RECORDS
  }
}

export const GOT_RECORDS = 'GOT_RECORDS';

export const gotRecords = (records) => {
  return {
    type: GOT_RECORDS,
    records
  }
}

export function getRecords() {   
    return function (dispatch) {
      dispatch(gettingRecords());
      return httpRequest('Poco').get().then(obj => dispatch(gotRecords(obj))); 
    }     
}