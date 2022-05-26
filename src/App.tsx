import { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

import Hooks from "./routes/Hooks";
import Utilities from "./routes/Utilities";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + React Haiku!</p>
        <p>
          React <code>Hooks</code> & <code>Utilities</code> that
save time and lines of code.
        </p>
        <p>
          <Link
            className="App-link"
            to="/Hooks"
          >
            Hooks
          </Link>
          {' | '}
          <Link
            className="App-link"
            to="/Utilities"
          >
            Utilities
          </Link>
        </p>
      </header>
    </div>
  )
}

export default App
