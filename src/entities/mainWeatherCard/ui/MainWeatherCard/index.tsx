import React from 'react'
import classNames from 'classnames';

import styles from './MainWeatherCard.module.scss';
import useFetchCurrentWeather from 'entities/mainWeatherCard/hook/useFetchCurrentWeather';

interface MainWeatherCardProps {
    location: GeolocationPosition
}

const MainWeatherCard: React.FC<MainWeatherCardProps> = ({location}) => {
  const [weatherData, loading, error] = useFetchCurrentWeather(location.coords.latitude + "," + location.coords.longitude)


  if(!weatherData) return <></>
  
  const localDate = new Date(Date.parse(weatherData.location.localtime));

  return (
    <article className={styles.card}>
      {weatherData && 
        <>
          <img src={weatherData.current.condition.icon} className={styles.weatherType} style={{width: '70px', height: '70px'}}/>
          <span className={styles.city}>{weatherData.location.region}</span>
          <span className={styles.weatherTemperature}>{weatherData.current.temp_c}°C</span>
          <span className={styles.weekDay}>{localDate.toLocaleString('en-US', {weekday: "short"})}</span>
          <span className={styles.date}>{localDate.toLocaleDateString('en-US')}</span>
        </>
      }

    </article>
  )
}

export default MainWeatherCard;
