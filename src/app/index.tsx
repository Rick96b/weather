import React from 'react';

import { withProviders } from "./providers";
import { Routing } from 'pages';

import "./styles/reset.scss";
import "./styles/variables.scss";
import useUserGeolocation from './hooks/useUserGeolocation';


const LocationContext = React.createContext<any>(undefined);


const App = () => {
  const {currentLocation, setCurrentLocation} = useUserGeolocation();

  

  return (
     <>
      {
        currentLocation && 
        <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
          <Routing />
        </LocationContext.Provider>
      }
     </> 

        
    
  )
}

export default withProviders(App);

export {LocationContext};
