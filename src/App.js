import React, { useState } from "react"
// Make sure to import the component we just built:
import ColorBlock from "./Components/ColorBlock"
import "./App.css"

function App() {
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

  let colorMap = colors.map((color, i) => {
    return <ColorBlock color={color} />
  })

  return (
    <div className="App">
      {colors.map((color, i) => (
        <ColorBlock key={i} color={color} />
      ))}
    </div>
  )
}

export default App
