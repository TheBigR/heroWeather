import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import ForecastItem from './ForecastItem'
import accuWeatherApi from '../apis/accuWeather'
import * as accuWeather from '../consts/accuWeather'

const LocationForecast = () => {
  const location = useLocation()
  const [forecast, setForcast] = useState([])
  const getForecast = async (key) => {
    console.log('getting forecast according to key ' + key)
    const result = await accuWeatherApi.get(`/forecasts/v1/daily/5day/${key}`, {
      params: {
        apikey: accuWeather.accuWeatherKey,
        metric: true,
      },
    })
    console.log(result.data.DailyForecasts)
    return result.data.DailyForecasts
  }
  useEffect(() => {
    setForcast(getForecast(location.location.key))
  }, [location.location.key])
  return (
    <div>
      <div>
        <h1>{location.location.name} forecast </h1>
        <div className="ui cards">
          {forecast.map((daily) => {
            return <ForecastItem forecast={daily} key={daily.Date} />
          })}
        </div>
      </div>
    </div>
  )
}

export default LocationForecast
