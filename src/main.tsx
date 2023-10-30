import React from 'react'
import ReactDOM from 'react-dom/client'
import {Calendar} from "./components/calendar";
import dayjs from "dayjs";
import "./global.scss";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Calendar type={"weekly"} date={dayjs()}/>
  </React.StrictMode>,
)
