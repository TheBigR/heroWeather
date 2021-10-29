import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { darkModeAction } from '../redux/actions/configActions'

const Header = () => {
  const dispatch = useDispatch()

  const config = useSelector((state) => state.config)
  const themeValue = config.darkMode

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }

  return (
    <div
      className="ui secondary pointing menu "
      style={{ backgroundColor: 'orange', padding: 3 }}
    >
      <Link to="/Weather" className="ui button teal">
        <i className="cloud icon"></i>Weather
      </Link>
      <Link to="/favorites" className="ui button teal">
        <i className="star icon"></i>Favorites
      </Link>
      <div className="right menu">
        <Link to="/" className="item ">
          <i className="home icon"></i>
        </Link>
        <div className="ui buttons">
          <button
            className={`ui button teal  ${
              themeValue === 'dark' ? 'active' : ''
            }`}
            onClick={() => themeChange('dark')}
          >
            Dark
          </button>
          <div className="or ui"></div>
          <button
            className={`ui button teal  ${
              themeValue === 'light' ? 'active' : ''
            }`}
            onClick={() => themeChange('light')}
          >
            Light
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
