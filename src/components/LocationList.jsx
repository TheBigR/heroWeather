import React from 'react'
import { useSelector } from 'react-redux'
import LocationItem from './LocationItem'

const LocationList = () => {
  const locations = useSelector((state) => state.locationReducer)
  return (
    <div style={{ color: 'orange', padding: 6 }}>
      <div className="ui three column grid">
        <div className="column center aligned">
          <i className="ui large icon star" />
        </div>
        <div className="column center aligned">
          <h1>Favorites</h1>
        </div>
        <div className="column center aligned">
          <i className="ui large icon star" />
        </div>
      </div>
      {locations.map((location) => {
        return <LocationItem key={location.key} location={location} />
      })}
    </div>
  )
}

export default LocationList
