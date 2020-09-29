import React, { StrictMode } from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./index.module.scss"

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
)
