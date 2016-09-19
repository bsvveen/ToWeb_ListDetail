
import React, { PropTypes } from 'react'

const Record = ({ onClick, key, title }) => (
  <li onClick={onClick}>
    {title}
  </li>
)

Record.propTypes = {
  onClick: PropTypes.func.isRequired,
  key: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Record
