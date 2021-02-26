import axios from 'axios'


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_Key = '4896c28c42cc5f40ea77f06828802b78';


export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_Key,
            lang: 'es',
        }
    })

return data;
}