import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import ForecastItem from './ForecastItem'

const LocationForecast = () => {
  const location = useLocation()
  const [forecast, setForcast] = useState([])
  const getForecast = (key) => {
    console.log('getting forecast according to key ' + key)
    return [
      { maxTemp: 23, minTemp: 10, weather: 'cloudy', date: '331' },
      { maxTemp: 23, minTemp: 10, weather: 'cloudy', date: '332' },
      { maxTemp: 23, minTemp: 10, weather: 'cloudy', date: '333' },
      { maxTemp: 23, minTemp: 10, weather: 'cloudy', date: '334' },
      { maxTemp: 23, minTemp: 10, weather: 'cloudy', date: '335' },
    ]
  }
  useEffect(() => {
    setForcast(getForecast(location.location.key))
  }, [location.location.key])
  console.log(location.location)
  return (
    <div>
      <div>
        <h1>{location.location.name} forecast </h1>
        <div className="ui cards">
          {forecast.map((daily) => {
            return <ForecastItem forecast={daily} key={daily.date} />
          })}
        </div>
      </div>
    </div>
  )
}

export default LocationForecast
