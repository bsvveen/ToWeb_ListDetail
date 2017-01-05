
import React, { PropTypes } from 'react'

const Record = ({ key, body, state, onEditClick, onDelClick }) => (
    <tr>
        <td>
          {body.title}<br />
          <i className='small margin'>{key}</i>       
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
    key: PropTypes.string,
    body: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default Record
