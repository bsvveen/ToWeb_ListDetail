
import React, { PropTypes } from 'react'
import Record from './record'
import editRecord from '../actions'

const RecordList = ({ records, onRecordClick }) => (
  <ul>
    {records.map(record =>
      <Record key={record.key} {...record.record} onClick={() => onRecordClick(record.key)} />
    )}
  </ul>
)

RecordList.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onRecordClick: PropTypes.func.isRequired
}

export default RecordList
