
import React, { PropTypes } from 'react'

const Record = ({ key, state, body, onEditClick, onDelClick }) => (
    <tr>
        <td>
          {body.title} <br />
          <i>{key}</i>
        </td><td>
          <span className={state.isFetching ? 'glyphicon glyphicon-refresh' : 'hidden'}></span>
          <span className={state.isDirty ? 'glyphicon glyphicon-lock' : 'hidden'} ></span>
          <span className={state.isValidated ? 'glyphicon glyphicon-ok' : 'glyphicon glyphicon-remove'} ></span>
        </td>
        <td>
          <span className='glyphicon glyphicon-pencil margin' onClick={onEditClick}></span>
          <span className='glyphicon glyphicon-trash margin' onClick={onDelClick}></span>
        </td>
    </tr>
)

Record.propTypes = {
    key: PropTypes.string.isRequired,    
    state: PropTypes.object.isRequired,         
    body: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default Record
