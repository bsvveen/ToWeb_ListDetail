
import React from 'react'
import { connect } from 'react-redux'
import { createNewRecord } from '../actions'

let newRecordButton = ({ onButtonClick }) => {
    return (<button type='submit' className='btn btn-success margin' onClick={e => onButtonClick()}>New</button>)
}

const mapStateToProps = (state) => { return {} }

const mapDispatchToProps = (dispatch) => {
    return { onButtonClick: () => { dispatch(createNewRecord()) }}
}

const NewRecord = connect(
    mapStateToProps,
    mapDispatchToProps
)(newRecordButton);

export default NewRecord
