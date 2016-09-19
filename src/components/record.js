
import React, { PropTypes } from 'react'

const Record = ({ title, onClick }) => (
    <li onClick={onClick}>
        {title}
    </li>
)

Record.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Record
