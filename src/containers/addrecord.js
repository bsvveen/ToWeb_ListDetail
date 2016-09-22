
import React from 'react'
import { connect } from 'react-redux'
import { addRecord } from '../actions'

let addRecordButton = ({ onButtonClick }) => {
    return (<input type='button' onClick={e => onButtonClick()} value='Add' />)
}

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
