import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLocation, deleteLocation } from '../redux/actions/locationActions'

const LocationItem = ({ location }) => {
  const dispatch = useDispatch()
  const [weather, setWeather] = useState({ temp: '', weatherDesc: '' })
  const locations = useSelector((state) => state.locationReducer)
  const isFavorite = locations.find(
    (currentLocation) => currentLocation.key === location.key,
  )
  const favoriteChange = (favorite) => {
    if (favorite) {
      dispatch(deleteLocation(location.key))
    } else {
      dispatch(addLocation(location))
    }
  }
  const getCurrentWeatherByLocationKey = (locationKey) => {
    console.log('getting weather')
    return { temp: '23', weatherDesc: 'sunny' }
  }

  useEffect(() => {
    setWeather(getCurrentWeatherByLocationKey(location.key))
  }, [location.key])

  return (
    <div className="ui card">
      <div className="content">
        <i className="right floated start icon"></i>
        <div className="header">{location.name}</div>
        <div className="description">
          <p className="floated right">temperature: {weather.temp}</p>
          <p>Weather: {weather.weatherDesc}</p>
        </div>
      </div>
      <div className="extra content">
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
