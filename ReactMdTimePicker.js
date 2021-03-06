import React from 'react';
import TimePicker from 'react-md/lib/Pickers/TimePickerContainer';

// or
// import { TimePicker } from 'react-md/lib/Pickers';

const ReactMdTimePicker = () => (
  <TimePicker
    id="inline"
    label="Select a time"
    inline
    lineDirection="center"
    className="md-cell"
  />
);

export default ReactMdTimePicker;