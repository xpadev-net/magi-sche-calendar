import {FC} from "react";
import {CalendarTimelineIndicator} from "./indicator.tsx";
import Styles from "./wrapper.module.scss"
import {CalendarTimelineContainer} from "./container.tsx";

type Props = {
  count: number;
}

const CalendarTimelineWrapper:FC<Props> = ({count}) => {
  return <div className={Styles.wrapper}>
    <CalendarTimelineIndicator/>
    {[...Array(count)].map((_,index)=>{
      return <CalendarTimelineContainer key={index}/>
    })}
  </div>
}

export {CalendarTimelineWrapper};