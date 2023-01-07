import React from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>home</div>} />
      </Routes>
    </div>
  )
}

export default App
