
import React from 'react'
import Footer from './footer'
import EditRecord from '../containers/editrecord'
import RecordList from '../containers/recordlist'
import AddRecord from '../containers/addrecord'
import GetRecords from '../containers/getrecords'

import logo from '../logo.svg';
import '../style.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <EditRecord />
    <AddRecord />
    <GetRecords />
    <RecordList />
    <Footer />
  </div>
)

export default App
