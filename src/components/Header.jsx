import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Container from '../theme/components/Container'
import { darkModeAction } from '../redux/actions/configActions'

const Header = () => {
  const dispatch = useDispatch()

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }

  return (
    <div className="ui green">
      <div className="ui secondary pointing menu">
        <Link to="/Weather" className="ui button">
          <i className="cloud icon"></i>Weather
        </Link>
        <Link to="/history" className="ui button">
          <i className="history icon"></i>History
        </Link>
        <div className="right menu">
          <Link to="/" className="item ">
            <i className="home icon"></i>
          </Link>
          <div className="ui buttons">
            <button className="ui button" onClick={() => themeChange('dark')}>
              Dark
            </button>
            <div className="or"></div>
            <button className="ui button" onClick={() => themeChange('light')}>
              Light
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
