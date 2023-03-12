import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from "google-maps-react";

const style = {
    width: '100%',
    height: '100%',
};

class GoogleMap extends Component {

    constructor(props) {
        super(props);
        this.state = { lat: this.props.lat, lng: this.props.lng }
    }
    // shouldComponentUpdate() {
    //     return false;
    // }
    // componentWillReceiveProps(nextProps) {
    //     console.log('tag', nextProps)
    //     this.setState({lat: nextProps.lat, lng: nextProps.lng})
    // }
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={12}
                style={style}
                initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
            />
        )
    }
}

export default GoogleApiWrapper({
    apiKey: '' // Google Api Key here!!!
})(GoogleMap);


