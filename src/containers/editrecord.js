
import React from 'react'
import { connect } from 'react-redux'
import Form from "react-jsonschema-form";
import { schema, uischema } from "../data/schemas/schema1";
import { saveRecord } from '../actions'

let EditRecordForm = ({ formData, onFormSubmit }) => {
    return (<Form schema={schema} uiSchema={uischema} formData={formData} onSubmit={e => onFormSubmit(e.formData)}  onError={ e => console.log(e) } />)
}

const mapStateToProps = (state) => {
    return { formData: state.detail.body }
}

const mapDispatchToProps = (dispatch) => {
    return { onFormSubmit: (formData) => { dispatch(saveRecord(formData)) } }
}

const EditRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRecordForm);

export default EditRecord
