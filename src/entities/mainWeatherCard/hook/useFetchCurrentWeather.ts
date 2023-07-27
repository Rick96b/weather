import React, { useEffect, useState } from 'react'
import getCurrentWeather from 'shared/api/getCurrentWeather';



const useFetchCurrentWeather = (location: string) => {
    const [weatherData, setWeatherData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        getCurrentWeather(location).then((data: any) => {
          console.log(data)
          setWeatherData(data);
            setLoading(false);
        }).catch(error => {
            setError(error)
        })
    }, [])


  return [weatherData, loading, error];
}

export default useFetchCurrentWeather;
