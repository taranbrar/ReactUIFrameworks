import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 

const style = {
  margin: 12,
};

const MuiButtonElement = () => (
    <MuiThemeProvider>
  <div>
    <RaisedButton label="Default" style={style} href='https://www.google.com/'/>
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
  </div>
  </MuiThemeProvider>
);

export default MuiButtonElement