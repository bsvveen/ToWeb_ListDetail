
import React, { PropTypes } from 'react'

const Record = ({ header, body, onClick }) => (
    <div onClick={onClick}>
        {body.title}
        <span className={header.isFetching ? 'glyphicon glyphicon-refresh' : 'hidden'}></span>
        <span className={header.isDirty ? 'glyphicon glyphicon-lock' : 'hidden'} ></span>
        <span className={header.isValidated ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove'} ></span>
    </div>
)

Record.propTypes = {
    header: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Record
