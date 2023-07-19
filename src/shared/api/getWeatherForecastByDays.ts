import axios from "axios";


const getWeatherForecastByDays = async (days: number) => {
    const responce = await axios.get("http://api.weatherapi.com/v1/forecast.json", 
    {
        params: {
            key: process.env.REACT_APP_WEATHER_API_KEY,
            q: 'Chelyabinsk',
            days: days
        }
    })

    return responce.data.forecast.forecastday;
}

export default getWeatherForecastByDays;