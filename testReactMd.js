import React from 'react'
import ReactMdFlatButton from './ReactMdFlatButton'
import ReactMdRaisedButton from './ReactMdRaisedButton'
import ReactMdFloatingButton from './ReactMdFloatingButton'
import ReactMdTable from './ReactMdTable'
import ReactMdChip from './ReactMdChip'
import ReactMdList from './ReactMdList'
import ReactMdSelectFieldButton from './ReactMdSelectFieldButton'
import ReactMdSelectField from './ReactMdSelectField'
import ReactMdFloatingLabelTextField from './ReactMdFloatingLabelTextField'
import ReactMdToolTip from './ReactMdToolTip'
import ReactMdDrawers from './ReactMdDrawers'
import ReactMdDatePicker from './ReactMdDatePicker'
import ReactMdTimePicker from './ReactMdTimePicker'

var testReactMd = React.createClass(
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
      <div>
     <link rel="stylesheet" href="https://unpkg.com/react-md/dist/react-md.deep_purple-deep_orange.min.css"></link>
    <table>
      <tr>
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right', paddingTop: '30px'}}>React MD Components</th>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>React MD Flat Button</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>React MD Raised Button</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>React MD Floating Button</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <ReactMdFlatButton/>
        </td>
        <td style={{paddingTop: '30px', width: '500px', paddingLeft: '300px'}}>
          <ReactMdRaisedButton/>
        </td>
         <td style={{paddingTop: '30px', width: '500px', paddingLeft: '100px'}}>
          <ReactMdFloatingButton/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>React MD Table</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px', paddingLeft: '300px'}}>React MD ToolTip</th>
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
         <ReactMdTable/>
        </td>
        <td style={{paddingLeft: '550px', paddingTop: '30px', width: '500px'}}>
          <ReactMdToolTip/>
        </td>
      </tr>
       <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>React MD Chip</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px', paddingLeft: '300px'}}>React MD List</th>
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <ReactMdChip/>
        </td>
        <td style={{paddingLeft: '450px', paddingTop: '30px', width: '500px'}}>
          <ReactMdList/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>React MD Select Field</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px', paddingLeft: '300px'}}>React MD Select Field Button</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
        <ReactMdSelectField/>
        </td>
        <td style={{paddingLeft: '400px', paddingTop: '30px', width: '500px'}}>
        <ReactMdSelectFieldButton/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>React MD Floating Label TextField</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px', paddingLeft: '300px'}}>React MD Drawers</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <ReactMdFloatingLabelTextField/>
        </td>
        <td style={{paddingLeft: '400px', paddingTop: '30px', width: '500px'}}>
          <ReactMdDrawers/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>React MD Date Picker</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px', paddingLeft: '300px'}}>React MD Time Picker</th>  
      </tr>
      <tr>
        <td style={{paddingLeft: '50px', paddingTop: '30px', width: '500px'}}>
          <ReactMdDatePicker/>
        </td>
        <td style={{paddingLeft: '550px', paddingTop: '30px', width: '500px'}}>
          <ReactMdTimePicker/>
        </td>
      </tr>
      </table> 
      </div>
  
    );
  }
})

export default testReactMd
