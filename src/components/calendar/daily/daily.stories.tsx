import type { Meta, StoryObj } from '@storybook/react';

import {DailyCalendar} from "./daily.tsx";
import dayjs from "dayjs";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: DailyCalendar,
} satisfies Meta<typeof DailyCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args:{
    date: dayjs()
  }
};
