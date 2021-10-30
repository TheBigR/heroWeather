import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const LocationInput = () => {
  let [city, setCity] = useState()
  let dispatch = useDispatch()
  return (
    <div>
      <div className="ui center aligned basic segment">
        <div className="ui left icon action input">
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
          />
          <button
            onClick={() => {
              dispatch()
            }}
            className="ui teal submit button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationInput
