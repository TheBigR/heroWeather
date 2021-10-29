import logo from './logo.svg'
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

function App() {
  const config = useSelector((state) => state.config)
  const themeValue = config.darkMode
  const dispatch = useDispatch()

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])
  console.log(themeValue)
  return (
    <ThemeProvider theme={themeValue === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Header />

        <Container>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 3
          </a>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
