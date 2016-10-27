
import React from 'react'
import { connect } from 'react-redux'
import { getRecords } from '../actions'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionCached from 'material-ui/svg-icons/action/cached';

let getRecordsButton = ({ onButtonClick }) => {
    return (      
      <button type='submit' className='btn btn-info' onClick={e => onButtonClick()}>Get All</button>
)}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onButtonClick: () => { dispatch(getRecords()) }
    }
}

const GetRecords = connect(
    mapStateToProps,
    mapDispatchToProps
)(getRecordsButton);

export default GetRecords
