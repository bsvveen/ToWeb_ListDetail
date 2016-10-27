
import React from 'react'
import { connect } from 'react-redux'
import { addRecord } from '../actions'

let addRecordButton = ({ onButtonClick }) => {
    return (
      <button type='submit' className='btn btn-info margin' onClick={e => onButtonClick()}>Add</button>
)}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => { dispatch(addRecord()) }
    }
}

const AddRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(addRecordButton);

export default AddRecord
