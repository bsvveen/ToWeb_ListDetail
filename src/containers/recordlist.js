
import { connect } from 'react-redux'
import recordList from '../components/recordlist'
import { editRecord } from '../actions'

const getRecords = (records, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
        return records;
    case 'SHOW_COMPLETED':
        return records.filter(t => t.completed);
    case 'SHOW_ACTIVE':
        return records.filter(t => !t.completed);
    default:
        return records;
  }
}

const mapStateToProps = (state) => {
  return {
    records: getRecords(state.records, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRecordClick: (key) => { dispatch(editRecord(key)) }
  }
}

const RecordList = connect(
    mapStateToProps,
    mapDispatchToProps
)(recordList);

export default RecordList
