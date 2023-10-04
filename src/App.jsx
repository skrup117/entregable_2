import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherContainer from './components/WeatherContainer';

function App() {

  const [weather, setWeather] = useState(null)

  const sucess = (pos) =>{
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const API_KEY = "e7aff5e57c570eadf5ed6c912f6b680e"
    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )
        .then(({data}) => setWeather(data))
        .catch((err) => console.log(err));
  };

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(sucess)
  }, [])

  const weatherBg = {
    "01d": "/bg_clear_sky.jpg",
    "02d": "/bg_few_clouds.jpg",
    "03d": "/bg_scattered_clouds.jpg",
    "04d": "/bg_broken_clouds.jpg",
    "09d": "/bg_shower_rain.jpg",
    "10d": "/bg_rain.jpg",
    "11d": "/bg_thunderstorm.jpg",
    "13d": "/bg_snow.jpg",
    "50d": "/bg_mist.jpg",
    "01n": "/bg_clear_sky.jpg",
    "02n": "/bg_few_clouds.jpg",
    "03n": "/bg_scattered_clouds.jpg",
    "04n": "/bg_broken_clouds.jpg",
    "09n": "/bg_shower_rain.jpg",
    "10n": "/bg_rain.jpg",
    "11n": "/bg_thunderstorm.jpg",
    "13n": "/bg_snow.jpg",
    "50n": "/bg_mist.jpg"
};

return (
    <main className="flex justify-center items-center min-h-screen px-2 bg-cover bg-center bg-[url('/bg_mist.jpg')]">
      {weather == null ? (
          <h3>cargando...</h3>
      ) : (
        <WeatherContainer weather={weather}/>
      )}

    </main>
  )



}

export default App
