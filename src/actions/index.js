
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

export const sendRecordToAPI = (records) => {
  return {
    type: RECEIVE_RECORDS,
    record
  }
}

export const receiveRecordFromAPi = (record) => {
  return {
    type: RECEIVE_RECORD,
    record
  }
}
