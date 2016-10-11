
import React, { PropTypes } from 'react'

const Record = ({ header, body, onClick }) => (
    <li onClick={onClick}>
        {body.title}
    </li>
)

Record.propTypes = {
    header: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Record
