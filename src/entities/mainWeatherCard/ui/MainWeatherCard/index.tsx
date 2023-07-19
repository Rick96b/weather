import React from 'react'
import classNames from 'classnames';

import styles from './MainWeatherCard.module.scss';

interface MainWeatherCardProps {
    city: string;
    temperature: string;
    weekDay: string;
    date: string;
}

const MainWeatherCard: React.FC<MainWeatherCardProps> = ({city, temperature, weekDay, date}) => {
  return (
    <article className={styles.card}>
        <i className={classNames('wi wi-night-sleet', styles.weatherType)}/>
        <span className={styles.city}>{city}</span>
        <span className={styles.weatherTemperature}>{temperature}°C</span>
        <span className={styles.weekDay}>{weekDay}</span>
        <span className={styles.date}>{date}</span>
    </article>
  )
}

export default MainWeatherCard;
