import type { Meta, StoryObj } from '@storybook/react';

import {WeeklyCalendar} from "./weekly.tsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: WeeklyCalendar,
} satisfies Meta<typeof WeeklyCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args:{
    date: new Date()
  }
};
