import React, {Component} from 'react';

class GoogleMap extends Component{
  ComponentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    console.log(this);
    return <div ref = "map"/>
  }
}

export default GoogleMap;
