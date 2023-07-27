import React from 'react'

import styles from './WeatherList.module.scss';
import { BriefWeatherCard } from 'entities/briefWeatherCard';
import useFetchForecast from 'widgets/weatherCardList/hooks/useFetchForecast';

interface WeatherListProps {

}

const WeatherList: React.FC<WeatherListProps> = ({}) => {
  const {forecastData, loading, error} = useFetchForecast(14);

  if(loading) return <div>Loading...</div>

  if(error) return <div>Error!</div>

  return (
    <ul className={styles.weatherList}>
      {forecastData?.map((dayData:any) =>
        <BriefWeatherCard weatherType={dayData.day.condition} temperature={dayData.day.avgtemp_c} date={dayData.date}/>
      )}
    

    </ul>
  )
}

export default WeatherList;
