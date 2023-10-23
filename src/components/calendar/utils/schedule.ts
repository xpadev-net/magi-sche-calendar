import dayjs, {Dayjs} from "dayjs";
import {TDateSchedule, TSchedule, TTimeSchedule} from "../@types/schedule";
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

const filterSchedules = (date: Dayjs, schedules: TSchedule[]) => {
  const dateSchedule:TDateSchedule[] = [],timeSchedule:TTimeSchedule[] = [];
  for (const schedule of schedules){
    if (schedule.isAllDay){
      if (date.isBetween(schedule.startDate,schedule.endDate,"day","[]")){
        dateSchedule.push(schedule);
      }
      continue;
    }
    if (date.isBetween(schedule.startTime,schedule.endTime, "day", "[]")){
      timeSchedule.push(schedule);
    }
  }
  return {dateSchedule,timeSchedule};
}

const daySeconds = 24 * 60 * 60;

const calcStyle = (_schedules: TTimeSchedule[],schedule: TTimeSchedule) => {
  const schedules = [..._schedules];
  const startTime = schedule.startTime.get("h") * 3600 + schedule.startTime.get("m") * 60 + schedule.startTime.get("s");
  const endTime = schedule.endTime.get("h") * 3600 + schedule.endTime.get("m") * 60 + schedule.endTime.get("s");
  const duration = endTime - startTime;
  let index = 0,count=0;
  for (const item of schedules){
    if (item === schedule){
      index = count;
      count ++;
      continue;
    }
    if (schedule.startTime.isBetween(item.startTime,item.endTime,"m","[]")||
      item.startTime.isBetween(schedule.startTime,schedule.endTime,"m","[]")){
      count ++;
    }
  }
  console.log(schedule,index,count)
  return {
    top: `${startTime / daySeconds * 100}%`,
    height: `${duration / daySeconds * 100}%`,
    width: `${100/count}%`,
    left: `${100*index/count}%`
  }
}

export {filterSchedules,calcStyle};