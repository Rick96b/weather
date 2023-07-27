import axios from "axios";


const getCurrentWeather = async (location: string) => {
    const responce = await axios.get("http://api.weatherapi.com/v1/current.json", 
    {
        params: {
            key: process.env.REACT_APP_WEATHER_API_KEY,
            q: location,
        }
    })

    return responce.data;
}

export default getCurrentWeather;