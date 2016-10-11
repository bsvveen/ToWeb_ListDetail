
import React, { PropTypes } from 'react'
import Record from './record'

const RecordList = ({ records, onRecordClick }) => (
  <ul>
    {records.map(record =>
        <Record key={record.body.key} {...record} onClick={() => onRecordClick(record.body.key)} />
    )}
  </ul>
)

RecordList.propTypes = {
    records: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.object.isRequired,
        body: PropTypes.object.isRequired
    }).isRequired).isRequired,
    onRecordClick: PropTypes.func.isRequired
}

export default RecordList
