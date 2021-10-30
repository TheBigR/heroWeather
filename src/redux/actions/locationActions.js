import * as actions from './actionTypes'
import { v1 as uuid } from 'uuid'

const getCurrentWeatherByLocationKey = (locationKey) => {
  console.log('getting weather')
  return '23'
}

const getLocationKeyByCity = (city) => {
  console.log('getting location key')
  return uuid()
}

export function addLocation(location) {
  return {
    type: actions.ADD_LOCATION,
    payload: location,
  }
}

export function deleteLocation(locationKey) {
  return {
    type: actions.DELETE_LOCATION,
    payload: locationKey,
  }
}

export function updateLocation(location) {
  return {
    type: actions.UPDATE_LOCATION,
    payload: location,
  }
}

export function updateCurrentWeather(city) {
  const key = 'currentLocation'
  const cityKey = getLocationKeyByCity(city)
  const weather = getCurrentWeatherByLocationKey(cityKey)

  return {
    type: actions.UPDATE_LOCATION,
    payload: {
      key,
      city,
      cityKey,
      weather,
    },
  }
}

export function getForecast(locationKey) {
    console.log('getting forecast by location Id')
    return [23,25,24,22,20]
}
