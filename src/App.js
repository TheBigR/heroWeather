import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import Container from './theme/components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { darkModeAction } from './redux/actions/configActions'
import LocationList from './components/LocationList'
import LocationInput from './components/LocationInput'

import TlvWeather from './components/tlvWeather'
import LocationForecast from './components/LocationForecastList'

function App() {
  const config = useSelector((state) => state.configReducer)
  const themeValue = config.darkMode
  const dispatch = useDispatch()

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  return (
    <ThemeProvider theme={themeValue === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Container>
          <Header />
          <Route path="/" exact component={TlvWeather} />
          <Route path="/favorites" exact component={LocationList} />
          <Route path="/weather" exact component={LocationInput} />
          <Route
            path="/weather/forecast/:location"
            exact
            component={LocationForecast}
          />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
