
import React, { PropTypes } from 'react'

const Record = ({ header, body, onEditClick, onDelClick }) => (
    <tr>
        <td>
          {body.title}
        </td><td>
          <span className={header.isFetching ? 'glyphicon glyphicon-refresh' : 'hidden'}></span>
          <span className={header.isDirty ? 'glyphicon glyphicon-lock' : 'hidden'} ></span>
          <span className={header.isValidated ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove'} ></span>
        </td>
        <td>
          <span className='glyphicon glyphicon-pencil' onClick={onEditClick}>Edit</span>
          <span className='glyphicon glyphicon-trash' onClick={onDelClick}>Delete</span>
        </td>
    </tr>
)

Record.propTypes = {
    header: PropTypes.object.isRequired,
    body: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default Record
