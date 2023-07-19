import React from 'react';

import styles from './HomePage.module.scss';
import { WeatherList } from 'widgets/weatherCardList';
import { MainWeatherCard } from 'entities/mainWeatherCard';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <MainWeatherCard temperature='24' weekDay='Tuesday' city='London' date='24/04/2023' />
      <div className={styles.weatherList}>
        <WeatherList />
      </div>
    </div>
  )
}

export default HomePage;
