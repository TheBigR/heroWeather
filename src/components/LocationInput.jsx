import React, { useState } from 'react'
import LocationItem from './LocationItem'

const LocationInput = () => {
  let [city, setCity] = useState('')
  let [location, setLocation] = useState()

  const getLocationKey = (city) => {
    setLocation({ name: city, key: 'nonono',  })
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
            onClick={() => getLocationKey(city)}
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
