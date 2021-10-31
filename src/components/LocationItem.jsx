import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addLocation, deleteLocation } from '../redux/actions/locationActions'
import { useLocation } from 'react-router'
import accuWeatherApi from '../apis/accuWeather'
import * as accuWeather from '../consts/accuWeather'

const LocationItem = ({ location }) => {
  const dispatch = useDispatch()
  const [weather, setWeather] = useState({ temp: '', weatherDesc: '' })
  const locations = useSelector((state) => state.locationReducer)
  const [currentLocation, setCurrentLocation] = useState(location)
  const passedLocation = useLocation()
  const isFavorite = locations.find(
    (currentLoc) => currentLoc.key === location.key,
  )
  const favoriteChange = (favorite) => {
    if (favorite) {
      dispatch(deleteLocation(location.key))
    } else {
      dispatch(addLocation(location))
    }
  }
  const getCurrentWeatherByLocationKey = async (locationKey) => {
    const result = await accuWeatherApi.get(
      `/forecasts/v1/daily/1day/${locationKey}`,
      {
        params: {
          apikey: accuWeather.accuWeatherKey,
          metric: true,
        },
      },
    )
    setWeather({
      max: result.data.DailyForecasts[0].Temperature.Maximum.Value,
      min: result.data.DailyForecasts[0].Temperature.Minimum.Value,
      unit: result.data.DailyForecasts[0].Temperature.Minimum.Unit,
      phrase: result.data.DailyForecasts[0].Day.IconPhrase,
    })
  }

  useEffect(() => {
    getCurrentWeatherByLocationKey(currentLocation.key)
  }, [currentLocation.key])

  useEffect(() => {
    if (passedLocation.location) {
      setCurrentLocation(passedLocation.location)
    }
  }, [passedLocation.location])

  return (
    <div className="ui card">
      <div className="content">
        <i className="right floated start icon"></i>
        <div className="header">{currentLocation.name}</div>
        <div className="description">
          <p className="floated right">
            max: {weather.max} {weather.unit}
          </p>
          <p className="floated right">
            min: {weather.min} {weather.unit}
          </p>
          <p>{weather.phrase}</p>
        </div>
      </div>
      <div className="extra content">
        <span className="left floated">
          <Link
            to={{
              pathname: `/weather/forecast/${location.name}`,
              location,
            }}
            className="ui button teal"
          >
            Forecast
          </Link>
        </span>
        <span
          className="right floated star "
          onClick={() => favoriteChange(isFavorite)}
        >
          <i className={`star icon ${isFavorite ? 'active' : ''}`}></i>
          Favorite
        </span>
      </div>
    </div>
  )
}

export default LocationItem
