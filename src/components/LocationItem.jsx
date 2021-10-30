import React from 'react'

const LocationItem = ({ location }) => {
  return (
    <div className="ui card">
      <div className="content">
        <i className="right floated start icon"></i>
        <div className="header">{location.name}</div>
        <div className="description">
          <p className="floated right">current temperature: </p>
          <p>Weather description</p>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated star ">
          <i className="star icon active"></i>
          Favorite
        </span>
      </div>
    </div>
  )
}

export default LocationItem
