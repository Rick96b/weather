import React from 'react'
import classNames from 'classnames';

import styles from './BriefWeatherCard.module.scss';
import { WeatherTypes } from '../../Types/WeatherTypes';

interface CardProps {
    weatherType: WeatherTypes;
    temperature: string;
    date: string;
}

const briefWeatherCard: React.FC<CardProps> = ({weatherType, temperature, date}) => {
  const dateData = new Date(Date.parse(date));
  const weekDay = dateData.toLocaleString('ru', {weekday: "long"})

  return (
    <article className={styles.card}>
        <h2 className={styles.dayName}>
          {
            (dateData.getDate() === new Date().getDate() && dateData.getMonth() === new Date().getMonth()) 
            ? 'Сегодня' 
            : weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
          }
        </h2>
        <div className={styles.cardContainer}>
            <i className={classNames('wi wi-night-sleet', styles.weatherType)}/>
            <p className={styles.weatherTemperature}>{temperature}°C</p>
        </div>
    </article>
  )
}

export default briefWeatherCard;
