import {FC, useEffect, useState} from "react";
import Styles from "./current-time-indicator.module.scss";
import dayjs from "dayjs";

const daySeconds = 24 * 60 * 60;

const CalendarTimelineCurrentTimeIndicator:FC = () => {
  const calcTop = () => {
    const day = dayjs();
    return (day.get("h") * 3600 + day.get("m") * 60 + day.get("s")) / daySeconds
  }
  const [top,setTop] = useState(calcTop());
  useEffect(() => {
    const interval = setInterval(()=>{
      setTop(calcTop());
    },1000*60);
    return ()=>{
      clearInterval(interval)
    }
  }, []);
  return <div className={Styles.wrapper} style={{
    top: `${top*100}%`,
  }}>

  </div>
}

export {CalendarTimelineCurrentTimeIndicator};