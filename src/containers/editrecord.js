
import React from 'react'
import { connect } from 'react-redux'

import Form from "react-jsonschema-form";
import { updateRecord } from '../actions'
import Schema from "../data/schemas/schema1.json";

let EditRecordForm = ({ formData, onFormSubmit }) => {
    return (<Form schema={Schema} formData={formData} onSubmit={e => onFormSubmit(e.formData)}  onError={ e => console.log(e) } />)
}

const mapStateToProps = (state) => {
    return {
        formData: state.records.filter(t => t.isDirty)[0]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFormSubmit: (formData) => { dispatch(updateRecord(formData)) }
    }
}

const EditRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRecordForm);

export default EditRecord
