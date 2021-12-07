import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <>
      <h1>google maps react</h1>
      <div>
        <Map  google={props.google} initialCenter={{
            lat: 31.273927,
            lng: 34.779002
          }} zoom={4}>
 
          <Marker onClick={props.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={props.onInfoWindowClose}>
           
          </InfoWindow>
        </Map>
      </div>
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDb4PEMlSdy75KK54bxVnt2fKIkuSKQUyU')
})(App)
