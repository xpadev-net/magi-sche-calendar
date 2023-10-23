import {FC} from "react";
import Styles from "./container.module.scss";
import {timelineRange} from "./const.ts";

const CalendarTimelineContainer:FC = () => {
  return <div className={Styles.wrapper}>
    {timelineRange.map(()=>{
      return <div className={Styles.item}></div>
    })}
  </div>
}
export {CalendarTimelineContainer}