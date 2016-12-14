
import React, { PropTypes } from 'react'

const Record = ({ key, header, body, onEditClick, onDelClick }) => (
    <tr>
        <td>
          {body.get('title')} <br />
          <i>{key}</i>
        </td><td>
          <span className={header.isFetching ? 'glyphicon glyphicon-refresh' : 'hidden'}></span>
          <span className={header.isDirty ? 'glyphicon glyphicon-lock' : 'hidden'} ></span>
          <span className={header.isValidated ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove'} ></span>
        </td>
        <td>
          <span className='glyphicon glyphicon-pencil margin' onClick={onEditClick}></span>
          <span className='glyphicon glyphicon-trash margin' onClick={onDelClick}></span>
        </td>
    </tr>
)

Record.propTypes = {
    key: PropTypes.string.isRequired,    
    isDirty: PropTypes.string.isRequired,
    isValidated: PropTypes.string.isRequired,
    isFetching: PropTypes.string.isRequired,        
    body: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default Record
