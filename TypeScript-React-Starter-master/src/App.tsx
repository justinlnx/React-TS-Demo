import * as React from 'react';
import './App.css';
import Hello from './containers/Hello';
import { ISite, IDevice, IServer, Site } from './dataModels/index';

const logo = require('./logo.svg');

class App extends React.Component {
  componentDidMount() {
    let pId = '123';
    let cCount = 2;
    let site: ISite = {
      parent_id: pId,
      child_count: cCount,
      alarms_count: 1,
      warnings_count: 1,
      name: 'site-name',
      id: 'site-1'
    };

    let device: IDevice = {
      device_id: 'd123',
      alarms_count: 0,
      warnings_count: 0,
      name: 'device-name',
      id: 'device-1',
    };

    let server: IServer = {
      site_id: site.id,
      devices: [],
      alarms_count: 0,
      warnings_count: 1,
      name: 'server-name',
      id: 'server-1'
    };

    let obj = new Site('pid', 1);
    console.log(obj.schema());

    console.log(site);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello />
      </div>
    );
  }
}

export default App;
