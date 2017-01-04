
import React, { PropTypes } from 'react'
import Record from './record'

const RecordList = ({ records, onEditClick, onDelClick}) => (
  <table className="table table-bordered table-striped table-hover"><tbody>
    {records.map(record =>
        <Record key={record.body.key} {...record} onEditClick={() => onEditClick(record)} onDelClick={() => onDelClick(record)}/>
    )}
  </tbody></table>
)

RecordList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.object).isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDelClick: PropTypes.func.isRequired
}

export default RecordList
