import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/Weather" className="item active">
          <i className="cloud icon"></i>Weather
        </Link>
        <Link to="/history" className="item">
          <i className="history icon"></i>History
        </Link>
        <div className="right menu">
          <Link to="/" className="item ">
            <i className="home icon"></i>
          </Link>
          <div className="ui buttons">
            <button className="ui button">Dark</button>
            <div className="or"></div>
            <button className="ui button active">Light</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
