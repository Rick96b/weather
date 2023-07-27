import React, { useEffect, useState } from 'react'

let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}


const useUserGeolocation = () => {
    const [currentLocation, setCurrentLocation] = useState<GeolocationPosition>();

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
              .query({ name: "geolocation" })
              .then(function (result) {
                if (result.state === "granted") {
                  navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => setCurrentLocation(position));
                } else if (result.state === "prompt") {
                  navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => setCurrentLocation(position), errors, options);
                }
              });
          } else {
            alert("Sorry Not available!");
          }
    }, [])
    
    return {currentLocation, setCurrentLocation};
}

export default useUserGeolocation;