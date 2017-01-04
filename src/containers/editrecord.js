
import React from 'react'
import Form from "react-jsonschema-form";
import { connect } from 'react-redux';
import { schema, uischema } from "../data/schemas/schema1";
import { updateRecord } from '../actions';

const EditRecordForm = ({ recordkey, record, onFormSubmit }) => {
    let onSubmit = (formData) => { onFormSubmit(recordkey, new Record(formData, record.state)); };
    if (recordkey) {
        return (<Form schema={schema} uiSchema={uischema} formData={record.body} onSubmit={e => onSubmit(e.formData)}  onError={ e => console.log(e) } />)
    }
    return (<div />)
}

const mapStateToProps = (state) => {    
    return { recordkey: state.detail.key, record: state.detail.record }    
}

const mapDispatchToProps = (dispatch) => {
    return { onFormSubmit: (key, record) => { dispatch(updateRecord(key, record)) } }
}

const EditRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditRecordForm);

export default EditRecord

// private

function Record(body, state) {  
  this.state = state;  
  this.body = body;
}
