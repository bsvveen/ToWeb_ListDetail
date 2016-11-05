
import React from 'react'
import Footer from './footer'
import EditRecord from '../containers/editrecord'
import RecordList from '../containers/recordlist'
import NewRecord from '../containers/newrecord'
import GetRecords from '../containers/getrecords'
import Tile from '../components/tile'

import logo from '../logo.svg';
import '../style.css';

const App = () => (
  <div className="App">
    <Tile>
      <img src={logo} className="App-logo pull-left" alt="logo" />
      <h2 className="pull-left">Welcome to React</h2>
    </Tile>
    <Tile title="Detail">
      <EditRecord />
      <NewRecord />
    </Tile>
    <Tile title="List">
      <GetRecords />
      <RecordList />
      <Footer />
    </Tile>

  </div>
)

export default App
