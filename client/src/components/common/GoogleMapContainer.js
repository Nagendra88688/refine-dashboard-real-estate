import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const GoogleMapContainer = (props) => {
  return (
    <Map
      google={props?.google}
      zoom={14}
      style={{ height: "400px", width: "330px" }}
      initialCenter={{
        lat: 28.6139,
        lng: 77.209,
      }}
    >
      <Marker
        position={{
          lat: 28.6139,
          lng: 77.209,
        }}
        onClick={this?.onMarkerClick}
        name={"Current location"}
      />

      <InfoWindow onClose={this?.onInfoWindowClose}>
        <div>
          <h1>{this?.state?.selectedPlace?.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDHJrwDbKgWwcGGgaW1k4voXqQ02f61Ewc",
})(GoogleMapContainer);
