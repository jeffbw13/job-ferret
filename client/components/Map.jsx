//  Google map.  Use on front screen & restaurant screen.
//  pass in coordinates of restaurants as an array
import React from 'react';
import GoogleMapReact from 'google-map-react';
import GOOGLEMAPS_API_KEY from '../config/googlemaps.js';
import FacilityPin from './FacilityPin.jsx';
import { Icon } from 'semantic-ui-react';

const iconStyle = {
  fontSize: '14px',
  borderRadius: '100px',
  boxShadow: '3px 3px 1px #888888'
}

const CurrentPin = ({text}) => {
  return(
    <div>
      {/* <Icon name="user circle outline" color='blue' size='big' style={iconStyle}/> */}
      <span style={{fontSize: '18px', backgroundColor: 'lightGreen', padding: '5px', borderRadius: '8px'}}>{text}</span>
    </div>
  )
}

const NotherPin = ({text}) => {
  return(
    <div>
      <span style={{fontSize: '14px', color: 'red', padding: '5px', borderRadius: '5px'}}>{text}</span>
    </div>
  )
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {lat: 37.773972, lng: -122.431297},
      zoom: 15
    }
    const center = {
      lat: props.user.latitude,
      lng: props.user.longitude
    };
    //  it's complaining about this
    //this.setState({center});
    //console.log(this.state.center, center);
  }

  //  create array of facilities
  //  where to put this?  Can't run until receive props
//   const facilityPins = this.props.facilities.map((facility, index) ={
//     if (facility.latitude === null || facility.longitude === null){
//       return null
//     } else {
//       return <FacilityPin
//               onClick={()=>this.setPinAsCenter(facility)}
//               key={index}
//               onChildMouseEnter={this.onChildMouseEnter}
//               onChildMouseLeave={this.onChildMouseLeave}
//               handlePinClick={this.handleOnClick}
//               facility={facility}
//               hover={this.state.hover}
//               lat={facility.latitude}
//               lng={facility.longitude}
//              />
//     }
//  }

  render() {
    let center = {
      lat: this.props.user.latitude,
      lng: this.props.user.longitude
    };
    return (
      <div className="map" style={{ height: '35vh', width: '35vw' }}>
        OR click on a facility near to you:
        <GoogleMapReact
          bootstrapURLKeys={{
              key: GOOGLEMAPS_API_KEY,
              language: 'en'
          }}
          defaultCenter={this.state.center}
          center={this.state.center}
          defaultZoom={this.state.zoom}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
        >
          {/* {facilityPins} */}
          <CurrentPin
              lat={this.props.user.latitude}
              lng={this.props.user.longitude}
              text={'You'}
          />
          <NotherPin
                      // onClick={()=>this.props.onLaundromatSelectClick(43)}

                        lat={37.775}
                        lng={-122.43}
                        text={'W'}
          />
          <NotherPin
              lat={37.7739}
              lng={-122.429}
              text={'W'}
          />
          <NotherPin
              lat={37.7739}
              lng={-122.435}
              text={'W'}
          />
            {/* {infoBox} */}
            {/* {this.props.currentFacilityPosition === "" && this.props.currentFacilityZoom === ""
              ? null
              : <Button onClick={this.removeCenterAndZoom} style={{float: 'left', backgroundColor: 'AliceBlue', margin: '5px', border: 'solid 1px black', fontSize: '100%', boxShadow: '3px 3px 1px #888888'}}><Icon className="compass" size="large" />re-center</Button>

            } */}

        </GoogleMapReact>

      </div>
    )
  }
}
/*
const facilityPins = this.props.facilities.map((facility, index) ={
  if (facility.latitude === null || facility.longitude === null){
    return null
  } else {
    return <FacilityPin
            onClick={()=>this.setPinAsCenter(facility)}
            key={index}
            onChildMouseEnter={this.onChildMouseEnter}
            onChildMouseLeave={this.onChildMouseLeave}
            handlePinClick={this.handleOnClick}
            facility={facility}
            hover={this.state.hover}
            lat={facility.latitude}
            lng={facility.longitude}
           />
  }
}

import React from 'react'
import { Icon } from 'semantic-ui-react'
const pinStyle={
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)'
}
const FacilityPin = (props) => {
    return(
      <div>
        <Icon className="building icon"
          size='big'
          style={pinStyle}
          onClick={props.onClick}
         />
      </div>
    )
}
export default FacilityPin

{facilityPins}
<CurrentPin
  lat={this.props.current.lat}
  lng={this.props.current.lng}
  text={'You'}
/>

const iconStyle = {
  borderRadius: '100px',
  boxShadow: '3px 3px 1px #888888'
}
const CurrentPin = ({text}) => {
 return(
    <div>
      <Icon name="user circle outline"
       color='blue'
       size='big'
       style={iconStyle}
      />
      {text}
     </div>
  )
}

{this.state.hover
  ? <InfoBox
     onClick={()=>{this.setPinAsCenter({
                     lat: this.state.lat,
                     lng: this.state.lng
             })}
     lat={this.state.lat}
     lng={this.state.lng}
     facility={this.state.facility}
 : null
}
*/
export default Map;