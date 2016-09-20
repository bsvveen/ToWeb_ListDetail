
import fetch from 'isomorphic-fetch'
import { apiUrl, SET_FILTER, GET_RECORDS_FROM_STORE, ADD_RECORD, RECEIVE_RECORD_FROM_WEBAPI, EDIT_RECORD} from "../data/constants"

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter
  }
}

export const getRecordsFromStore = () => {
  return {
    type: GET_RECORDS_FROM_STORE
  }
}

export const receiveRecordFromWebAPi = (record) => {
  return {
    type: RECEIVE_RECORD_FROM_WEBAPI,
    record, //json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const getRecordsFromWebApi = () => {
  return function (dispatch) {

    return fetch(apiUrl + 'GetAll', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => dispatch(receiveRecordFromWebAPi(json))
      )
    }
}

export const addRecordToStore = (record) => {
  return {
    type: ADD_RECORD,
    record
  }
}

export const postRecordToWebApi = (record) => {
  return function (dispatch) {

    dispatch(addRecordToStore(record))

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

export const editRecord = (key) => {
  return {
    type: EDIT_RECORD,
    key
  }
}
