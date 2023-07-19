import React from 'react'

import styles from './WeatherList.module.scss';
import { BriefWeatherCard } from 'entities/briefWeatherCard';
import { getWeatherForecastByDays } from 'shared/api';
import useFetchForecast from 'widgets/weatherCardList/hooks/useFetchForecast';

interface WeatherListProps {

}

const WeatherList: React.FC<WeatherListProps> = ({}) => {
  const {forecastData, loading, error} = useFetchForecast(14);

  if(loading) return <div>Loading...</div>

  if(error) return <div>Error!</div>
  console.log(forecastData)
  return (
    <ul className={styles.weatherList}>
      {forecastData?.map((dayData:any) =>
        <BriefWeatherCard weatherType='Rain' temperature={dayData.day.avgtemp_c} date={dayData.date}/>
      )}
    

    </ul>
  )
}

export default WeatherList;
