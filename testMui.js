import React from 'react'
import MuiListElement from './MuiListElement'
import MuiButtonElement from './MuiButtonElement'
import MuiFloatingActionButton from './MuiFloatingActionButton'
import MuiIconButton from './MuiIconButton'
import MuiTextBoxElement from './MuiTextBoxElement'
import MuiGridList from './MuiGridList'
import ReactWidgetDropDownList from './ReactWidgetDropDownList'
import ReactWidgetComboBox from './ReactWidgetComboBox'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MuiTable from './MuiTable'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

var testMui = React.createClass(
{
 getInitialState() {
    return {
      open: false,
      color: '#00ff00'
    }
  },

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      
    });
  },

  handleRequestClose(){
    this.setState({
      open: false,
    });
  },

  render() 
  {
    return (     
      <MuiThemeProvider>
    <table>
      <tr>
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right'}}>Material UI Components</th></tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Material UI Button</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Material UI TextBox</th>
      </tr>
      <tr>
        <td style={{paddingTop: '20px',width: '800'}}><MuiButtonElement/></td>
        <td style={{paddingTop: '20px',width: '800'}}><MuiTextBoxElement/></td>
      </tr>
      <tr>
        <td style={{paddingTop: '20px',width: '800'}}><MuiFloatingActionButton/></td>
      </tr>
      <tr>
       <td style={{paddingTop: '20px',width: '800'}}><MuiIconButton/></td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '10px'}}>Material UI List</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '10px'}}>Material UI Grid list</th>
      </tr>
      <tr>  
        <td style={{paddingTop: '10px',width: '800', paddingLeft: '50px'}}><MuiListElement/></td>
        <td style={{paddingTop: '10px',width: '800'}}><MuiGridList/></td>
      </tr>
      <tr>  
        <td style={{fontSize:'20px', paddingTop: '50px'}}>Material UI dropdown menu doesn't implement the features we need.</td>
        <td style={{fontSize:'20px', paddingTop: '50px'}}>Material UI doesn't support Combo-Box.</td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Material UI Table</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '70px',width: '800', paddingLeft: '50px'}}>
          <MuiTable/>
        </td>
      </tr>
      </table> 
      </MuiThemeProvider>
    );
  }
})

export default testMui


