import type { Meta, StoryObj } from '@storybook/react';

import {CalendarWrapper} from "./wrapper.tsx";
import dayjs from "dayjs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: CalendarWrapper,
} satisfies Meta<typeof CalendarWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args:{
    count: 7,
    startDate: dayjs(),
    dispatchOnChange: ()=>0,
  }
};
