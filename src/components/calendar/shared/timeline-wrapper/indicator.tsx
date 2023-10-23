import {FC} from "react";
import Styles from "./indicator.module.scss"
import {timelineRange} from "./const.ts";

const CalendarTimelineIndicator:FC = () => {
  return <div className={Styles.wrapper}>
    <div className={Styles.spacer}/>
    <div className={Styles.container}>
      {timelineRange.map((_,index)=>{
        return <div className={Styles.item} key={index}>
        <span className={Styles.text}>
          {index}
        </span>
          <span className={Styles.border}></span>
        </div>
      })}
    </div>
  </div>
}

export {CalendarTimelineIndicator}