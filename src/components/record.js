
import React, { PropTypes } from 'react'

const Record = ({ state, body, onEditClick, onDelClick }) => (
    <tr>
        <td>
          {body.title}<br />
          <i className='small margin'>{body.key}</i>       
          <span className={state.isFetching ? 'glyphicon glyphicon-refresh' : 'hidden'} title='Fetching'></span>
          <span className={state.isDirty ? 'glyphicon glyphicon-lock' : 'hidden'}  title='Dirty'></span>
          <span className={state.isValidated ? 'glyphicon glyphicon-ok' : 'hidden'}  title='Validated'></span>
        </td>
        <td>
          <span className='glyphicon glyphicon-pencil margin' onClick={onEditClick} title='Edit'></span>
          <span className='glyphicon glyphicon-trash margin' onClick={onDelClick} title='Delete'></span>
        </td>
    </tr>
)

Record.propTypes = {       
    state: PropTypes.object.isRequired,         
    body: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default Record
