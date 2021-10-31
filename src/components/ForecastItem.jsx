import React from 'react'
import Card from '../theme/components/Card'

const ForecastItem = (forecast) => {
  const currentForecast = forecast.forecast
  const epoch = new Date(currentForecast.EpochDate * 1000)
  const weekDay = epoch.toLocaleDateString('default', { weekday: 'long' })
  const date = epoch.toLocaleDateString()

  return (
    <Card>
      <div className="ui content">
        <h5>
          {`${weekDay}
           ${date}
          `}
        </h5>

        <div className="ui description ">
          <div>
            max: {currentForecast.Temperature.Maximum.Value}{' '}
            {currentForecast.Temperature.Maximum.Unit}
          </div>
          <div>
            min: {currentForecast.Temperature.Minimum.Value}{' '}
            {currentForecast.Temperature.Maximum.Unit}
          </div>
          <h3>{currentForecast.Day.IconPhrase}</h3>
        </div>
      </div>
    </Card>
  )
}

export default ForecastItem
