import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
import AutoComplete from 'material-ui/AutoComplete'
const dataSource1 = ['12345', '23456', '34567']

const MuiTextBoxElement = () => (
  <MuiThemeProvider>
  <div>
    <AutoComplete
      floatingLabelText="showAllItems"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource1}
    /><br />

    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
  </div>
  </MuiThemeProvider>
);

export default MuiTextBoxElement;