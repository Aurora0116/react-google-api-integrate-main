import React, { Component } from 'react'
import './App.css';
import GooglMap from './map';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: 1.3521, lng: 103.8198 }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <GooglMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    )
  }
}

