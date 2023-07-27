import React from 'react'
import classNames from 'classnames';

import styles from './BriefWeatherCard.module.scss';

interface CardProps {
    weatherType: {
      icon: string,
      text: string,
      code: number
    };
    temperature: string;
    date: string;
}

const briefWeatherCard: React.FC<CardProps> = ({weatherType, temperature, date}) => {
  const dateData = new Date(Date.parse(date));
  const weekDay = dateData.toLocaleString('en-US', {weekday: "short"})

  return (
    <article className={styles.card}>
        <h2 className={styles.dayName}>
          {
            (dateData.getDate() === new Date().getDate() && dateData.getMonth() === new Date().getMonth()) 
            ? 'Today' 
            : weekDay.charAt(0).toUpperCase() + weekDay.slice(1)
          }
        </h2>
        <div className={styles.cardContainer}>
            <img src={weatherType.icon}/>
            <p className={styles.weatherTemperature}>{temperature}°C</p>
        </div>
    </article>
  )
}

export default briefWeatherCard;
