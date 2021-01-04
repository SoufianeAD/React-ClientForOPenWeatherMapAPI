import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: props.lat, lng: props.lon }}
        >
            <Marker position={{ lat: props.lat, lng: props.lon }} />
        </GoogleMap>
));

const Map =  (props) => {
    return (
        <MyMapComponent
            lat={props.lat}
            lon={props.lon}
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAq06l5RUVfib62IYRQacLc-KAy0XIWAVs"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `200px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default Map;