import React from 'react'
import ReactBootstrapButton from './ReactBootstrapButton'
import ReactBootstrapDropDown from './ReactBootstrapDropDown'
import ReactBootstrapList from './ReactBootstrapList'
import ReactBootstrapTooltip from './ReactBootstrapTooltip'
import ReactBootstrapNavbars from './ReactBootstrapNavbars'
import ReactBootstrapPager from './ReactBootstrapPager'
import ReactBootstrapTable from './ReactBootstrapTable'
import ReactBootstrapTextfieldValidation from './ReactBootstrapTextfieldValidation'
import ReactBootstrapCheckbox from './ReactBootstrapCheckbox'
import ReactBootstrapRadioButton from './ReactBootstrapRadioButton'
import ReactBootstrapGrid from './ReactBootstrapGrid'
import ReactBootstrapCarousel from './ReactBootstrapCarousel'

var testReactBootstrap = React.createClass(
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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
    <table>
      <tr>
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right', paddingTop: '30px'}}>React Bootstrap Components</th>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px', paddingLeft: '100px'}}>React Bootstrap Button</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px', paddingLeft: '400px'}}>React Bootstrap Drop Down</th>
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapButton/>
        </td>
        <td style={{paddingTop: '30px', paddingLeft: '300px', width: '600px'}}>
          <ReactBootstrapDropDown/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '100px'}}>React Bootstrap List</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '400px'}}>React Bootstrap ToolTip</th>
      </tr>
      <tr>
        <td style={{paddingTop: '50px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapList/>
        </td>
        <td style={{paddingTop: '50px', paddingLeft: '300px', width: '600px'}}>
           <ReactBootstrapTooltip/> 
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '100px'}}>React Bootstrap Navbars</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '400px'}}>React Bootstrap Pager</th>
      </tr>
      <tr>
        <td style={{paddingTop: '50px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapNavbars/>
        </td>
        <td style={{paddingTop: '50px', paddingLeft: '300px', width: '600px'}}>
            <ReactBootstrapPager/>  
        </td>
      </tr>
       <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '100px'}}>React Bootstrap Table</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '400px'}}>React Bootstrap Text Validation</th>
      </tr>
      <tr>
        <td style={{paddingTop: '50px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapTable/>
        </td>
        <td style={{paddingTop: '50px', paddingLeft: '300px', width: '600px'}}>
             <ReactBootstrapTextfieldValidation/>   
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '100px'}}>React Bootstrap Checkbox</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '400px'}}>React Bootstrap Radio Button</th>
      </tr>
      <tr>
        <td style={{paddingTop: '50px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapCheckbox/>
        </td>
        <td style={{paddingTop: '50px', paddingLeft: '300px', width: '600px'}}>
              <ReactBootstrapRadioButton/>    
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '100px'}}>React Bootstrap Grid</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '60px', paddingLeft: '400px'}}>React Bootstrap Carousel</th>
      </tr>
      <tr>
        <td style={{paddingTop: '50px', width: '600px', paddingLeft: '15px'}}>
          <ReactBootstrapGrid/>
        </td>
        <td style={{paddingTop: '50px', paddingLeft: '300px', width: '600px'}}>
               <ReactBootstrapCarousel/>     
        </td>
      </tr>
      </table> 
      </div>
    );
  }
})

export default testReactBootstrap
