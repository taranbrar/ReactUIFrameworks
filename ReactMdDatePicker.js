import React from 'react';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';

// or
// import { DatePicker } from 'react-md/lib/Pickers';

const ReactMdDatePicker = () => (
  <div className="md-grid no-padding">
    <DatePicker
      id="inlineCenter"
      label="Select a date"
      inline
      lineDirection="center"
      className="md-cell"
    />
    <DatePicker style={{width: '450px'}}
      id="customFormat"
      label="Custom Format Options"
      className="md-cell"
      formatOptions={{
        weekday: 'long',
        era: 'narrow',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'long',
      }}
    />
  </div>
);

export default ReactMdDatePicker;