
import React, { PropTypes } from 'react'
import Record from './record'

const RecordList = ({ records, onEditClick, onDelClick}) => (
  <table className="table table-bordered table-striped table-hover"><tbody>
    {records.map(record =>
        <Record key={record.key} {...record} onEditClick={() => onEditClick(record)} onDelClick={() => onDelClick(record)}/>
    )}
  </tbody></table>
)

RecordList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        isDirty: PropTypes.string.isRequired,
        isValidated: PropTypes.string.isRequired,
        isFetching: PropTypes.string.isRequired,
        body: PropTypes.object.isRequired
    }).isRequired).isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default RecordList
