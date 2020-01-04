import React from 'react'

import { AppContainer, AppHeader, AppLink } from './app.styles'

const App = () => (
  <AppContainer>
    <AppHeader>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <AppLink
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </AppHeader>
  </AppContainer>
)

export default App
