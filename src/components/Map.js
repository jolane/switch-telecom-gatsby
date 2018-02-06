import React from "react"

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"
import { compose, withProps } from "recompose"

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9Dn49n6cgyTLPI0wZ5u0QanW3OLItgLs&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -37.867485, lng: 144.742849 }}
  >
    <Marker
      position={{ lat: -37.867485, lng: 144.742849 }}
      icon={{
        url: "/images/map-marker@2x.png",
        size: new google.maps.Size(45, 54),
        anchor: new google.maps.Point(22, 54),
        scaledSize: new google.maps.Size(45, 54)
      }}
    />
  </GoogleMap>
))

export default Map
