import React from 'react'
import ReactWidgetComboBox from './ReactWidgetComboBox'
import ReactWidgetDropDownList from './ReactWidgetDropDownList'
import ReactWidgetMultiSelect from './ReactWidgetMultiSelect'
import ReactWidgetSelect from './ReactWidgetSelect'

var testReactWidget = React.createClass(
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
    <table>
      <tr>
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right', paddingTop: '30px'}}>React Widget Components</th>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px', paddingLeft: '100px'}}>React Bootstrap ComboBox</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px', paddingLeft: '400px'}}>React Bootstrap DropDown List</th>
      </tr>
      <tr>
        <td style={{paddingTop: '70px', width: '600px', paddingLeft: '15px'}}>
          <ReactWidgetComboBox/>
        </td>
        <td style={{paddingTop: '70px', paddingLeft: '300px', width: '600px'}}>
          <ReactWidgetDropDownList/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '100px', paddingLeft: '100px'}}>React Bootstrap Multi-Select</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '100px', paddingLeft: '400px'}}>React Bootstrap Select</th>
      </tr>
      <tr>
        <td style={{paddingTop: '70px', width: '600px', paddingLeft: '15px'}}>
          <ReactWidgetMultiSelect/>
        </td>
        <td style={{paddingTop: '70px', paddingLeft: '300px', width: '600px'}}>
          <ReactWidgetSelect/>
        </td>
      </tr>
      </table> 
      </div>
    );
  }
})

export default testReactWidget
