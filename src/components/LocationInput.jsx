import React, {  useState } from 'react'
import LocationItem from './LocationItem'
import accuWeatherApi from '../apis/accuWeather'
import * as accuWeather from '../consts/accuWeather'

const LocationInput = () => {
  let [city, setCity] = useState('')
  let [location, setLocation] = useState()

  
  const getLocationKey = async (city) => {
    const result = await accuWeatherApi.get('/locations/v1/cities/search', {
      params: {
        apikey: accuWeather.accuWeatherKey,
        q: city,
      },
    })    
    setLocation({ name: city, key: result.data[0].Key })
  }

  return (
    <div>
      <div className="ui center aligned basic segment">
        <div className="ui left icon action input">
          <input
            onChange={(e) => {
              setCity(e.target.value)
            }}
            value={city}
            type="text"
          />
          <button
            className="ui button teal"
            onClick={() => {
              getLocationKey(city)
              setCity('')
            }}
          >
            <i className="search ui icon"></i>
          </button>
        </div>
      </div>
      {location && (
        <div className="ui center aligned basic segment">
          <LocationItem location={location} />
        </div>
      )}
    </div>
  )
}

export default LocationInput
