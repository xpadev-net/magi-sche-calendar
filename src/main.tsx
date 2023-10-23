import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Calendar} from "./components/calendar";
import dayjs from "dayjs";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calendar type={"weekly"} date={dayjs()}/>
  </React.StrictMode>,
)
