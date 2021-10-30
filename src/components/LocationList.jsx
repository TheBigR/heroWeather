import React from 'react'
import { useSelector } from 'react-redux'
import LocationItem from './LocationItem'

const LocationList = () => {
  const locations = useSelector((state) => state.locationReducer)
  return (
    <div className="ui relaxed divided">
      <h1>Favorites</h1>
      {locations.map((location) => {
        return <LocationItem key={location.key} location={location} />
      })}
    </div>
  )
}

export default LocationList
