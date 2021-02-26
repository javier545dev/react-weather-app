import React from 'react'
import {useState} from 'react'
import {fetchWeather} from './api/fetchWeather'
import "bootswatch/dist/cyborg/bootstrap.min.css"

const App = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('')

    const search = async (e) => {

        if (e.key === 'Enter') {

            if (!query.trim()){
                setError(<h4 className="alert alert-dismissible alert-primary mt-4 color">el campo esta vacio</h4>)
                return
            }

            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }
    return (
        <div className='gradient__div container justify-content-center align-items-center vh-100'>
            <div className='row justify-content-center h-100'>
                <div className='col-md-7 mx-auto align-self-center text-center'>
                    <div className='card shadow border border-primary'>
                        <div className='card-body align-self-center'>
                            <h2 className='m-2 mt-5 mb-5'>Pronostico del Clima</h2>
                            <input type='text' className='form-control text-center border border-primary' placeholder='Ingresa Ciudad o Pais' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
                            {weather.main ? (
                                <div className='form-group mt-5 mb-5'>

                                    <h3 className='text-primary m-4'>
                                        <span>{weather.name}</span>
                                        <sup>{weather.sys.country}</sup>
                                    </h3>
                                    <h2>
                                        {Math.round(weather.main.temp)}
                                        <sup>&deg;C</sup>
                                    </h2>
                                    <div>
                                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                                        <h2>{weather.weather[0].description}</h2>
                                    </div>
                                </div>
                            ):(
                                <div className='m-5'>
                                    {error}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App
