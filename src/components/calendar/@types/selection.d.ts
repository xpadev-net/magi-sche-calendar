import {Dayjs} from "dayjs";
import {Dispatch, SetStateAction} from "react";

export type TSelectionRange = {
  pos1: Dayjs;
  pos2: Dayjs;
}

export type TSelectingDateContext = {
  selectingDate: Partial<TSelectionRange>|undefined;
  setSelectingDate: Dispatch<SetStateAction<Partial<TSelectionRange> | undefined>>;
  dispatchOnChange: (pos1: Dayjs, pos2: Dayjs) => void;
}