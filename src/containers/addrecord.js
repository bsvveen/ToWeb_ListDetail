
import React from 'react'
import { connect } from 'react-redux'

import Form from "react-jsonschema-form";
import { postRecordToWebApi, addRecordToStore } from '../actions'
import Schema from "../data/schemas/schema1.json";

let AddRecordForm = ({ dispatch, formData }) => {
  return (<Form schema={Schema} formData={formData} onSubmit={e => dispatch(addRecordToStore(e.formData)) } onError={ e => console.log(e) } />)
}

const AddRecord = connect()(AddRecordForm)

export default AddRecord
