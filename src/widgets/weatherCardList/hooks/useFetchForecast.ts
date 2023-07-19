import React, { useEffect, useState } from 'react'
import { getWeatherForecastByDays } from 'shared/api';

interface useFetchForecastProps {
    (days: number): any;
}



const useFetchForecast: useFetchForecastProps = (days) => {
    const [forecastData, setForecastData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        getWeatherForecastByDays(days).then((data: any) => {
            setForecastData(data);
            setLoading(false);
        }).catch(error => {
            setError(error)
        })
    }, [])


  return {forecastData, loading, error};
}

export default useFetchForecast;
