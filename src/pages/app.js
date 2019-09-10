import React from "react"
import { Router } from "@reach/router"
import HomePage from "./index"


const App = () => (
  <Router>
    <HomePage path="/" />
    <HomePage path="/recepty/:id" />
  </Router>
)

export default App
