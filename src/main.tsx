import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Calendar} from "./components/calendar";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calendar/>
  </React.StrictMode>,
)
