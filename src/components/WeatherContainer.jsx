import { useState } from "react";
import WeatherStat from "./WeatherStat";

const WeatherContainer = ({weather}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    
    const changeUniTemp = (temp) => {
        if(isCelsius){
            //transformacion a celsius
            const celsiusTemp = (temp - 273.15).toFixed(1)
            return celsiusTemp + "°C"
        }else{
            //transformacion a fahrenheint
            const fahrenheintTemp = (((temp - 273.15) * 9 / 5) + 32).toFixed(1)
            return fahrenheintTemp + "°F "
        }
    }
    const weatherIcons = {
        "01d": "/clear_sky.png",
        "02d": "/few_clouds.png",
        "03d": "/scattered_clouds.png",
        "04d": "/broken_clouds.png",
        "09d": "/shower_rain.png",
        "10d": "/rain.png",
        "11d": "/thunderstorm.png",
        "13d": "/snow.png",
        "50d": "/mist.png",
        "01n": "/clear_sky.png",
        "02n": "/few_clouds.png",
        "03n": "/scattered_clouds.png",
        "04n": "/broken_clouds.png",
        "09n": "/shower_rain.png",
        "10n": "/rain.png",
        "11n": "/thunderstorm.png",
        "13n": "/snow.png",
        "50n": "/mist.png"
    }
    
    const handleChangeUnit = () => {
        setIsCelsius(!isCelsius)
    }


    console.log(weather);
    return (
        <section className="text-center grid gap-20 items-center justify-center justify-items-center">
            <h3 className="text-2xl">{weather.name}, {weather.sys.country}</h3>

        <div className="grid gap-5 sm:grid-cols-[1fr_auto]">
            {/* seccion superior */}
            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-1 justify-items-center">
                <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
                <span className="text-5xl">{changeUniTemp(weather.main.temp)}</span>

                <div className="flex justify-center h-20 w-20">
                    <img src={weatherIcons[weather.weather[0].icon]} alt="" />
                </div>
            </article>

            {/* seccion inferior */}
            <article className="grid grid-cols-3 justify-items-center items-center bg-slate-500/50 rounded-2xl p-1 py-3 sm:grid-cols-1 gap-2"> 
                <WeatherStat icon="/wind.png" unit = "m/s" value={weather.wind.speed} />
                <WeatherStat icon="/humidity.png" unit = "%" value={weather.main.humidity} />
                <WeatherStat icon="/pressure.png" unit = "hPa" value={weather.main.pressure} />
            </article>
        </div>

        <button onClick={handleChangeUnit} className="bg-slate-500/50 w-14 py-2 rounded-2xl">C° / F°</button> 

        </section>
    )
}
export default WeatherContainer