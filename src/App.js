import logo from './logo.svg'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import Header from './components/Header'

function App() {
  return (
    <ThemeProvider className="App ui container">
      <BrowserRouter>
        <div>
          <Header />
          <header className="App-header">
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
              Learn React
            </a>
          </header>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
