import React from 'react'
import Card from '../theme/components/Card'

const ForecastItem = (forecast) => {
  const currentForecast = forecast.forecast
  return (
    <Card>
      <div className="ui content">
        <h1>{currentForecast.date}</h1>
        <div className="ui description ">
          <div>max: {currentForecast.maxTemp}</div>
          <div>min: {currentForecast.minTemp}</div>
          <h3>{currentForecast.weather}</h3>
        </div>
      </div>
    </Card>
  )
}

export default ForecastItem
