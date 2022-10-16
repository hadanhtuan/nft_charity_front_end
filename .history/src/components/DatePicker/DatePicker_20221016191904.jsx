import * as React from "react";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
  };
  
  export default function StaticDatePickerLandscape() {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
export default function MyDatePicker() {

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
