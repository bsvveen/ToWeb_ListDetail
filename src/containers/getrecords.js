
import React from 'react'
import { connect } from 'react-redux'
import { getRecords } from '../actions'

let getRecordsButton = ({ onButtonClick }) => {
    return (<input type='button' onClick={e => onButtonClick()} value='Get' />)
}

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
