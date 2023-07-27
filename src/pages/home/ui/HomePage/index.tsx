import React, { useContext } from 'react';

import styles from './HomePage.module.scss';
import { WeatherList } from 'widgets/weatherCardList';
import { MainWeatherCard } from 'entities/mainWeatherCard';
import { LocationContext } from 'app';

const HomePage = () => {
  const { currentLocation, setCurrentLocation } = useContext(LocationContext);

  return (
    <div className={styles.home}>
      {
        <MainWeatherCard location={currentLocation} />
      }  
      <div className={styles.weatherList}>
        <WeatherList />
      </div>
    </div>
  )
}

export default HomePage;
