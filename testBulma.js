import React from 'react'
import insertCss from 'insert-css';
import css from 'C:/Projects/ReactComponents/node_modules/re-bulma/build/css';
try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) {}

import BulmaButton from './BulmaButton'
import BulmaTextfield from './BulmaTextfield'
import BulmaSelectDropDown from './BulmaSelectDropDown'
import BulmaTable from './BulmaTable'
import BulmaMenu from './BulmaMenu'
import BulmaHero from './BulmaHero'

var testBulma = React.createClass(
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
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right'}}>Bulma UI Components</th></tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Buttons</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Text Field</th>
      </tr>
      <tr>
        <td style={{paddingTop: '20px',width: '600', paddingLeft: '120px'}}><BulmaButton/></td>
        <td style={{paddingTop: '20px',paddingLeft:'200px', width: '600'}}><BulmaTextfield/></td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Select DropDown</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Table</th>
      </tr>
      <tr>
        <td style={{paddingTop: '20px',width: '600', paddingLeft: '180px'}}><BulmaSelectDropDown/></td>
        <td style={{paddingTop: '20px',paddingLeft:'200px',paddingTop: '30px', width: '600'}}><BulmaTable/></td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Menu</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Bulma Hero</th>
      </tr>
      <tr>
        <td style={{paddingTop: '20px',width: '600', paddingLeft: '180px'}}><BulmaMenu/></td>
        <td style={{paddingTop: '20px',paddingLeft:'200px',paddingTop: '30px', width: '600'}}><BulmaHero/></td>
      </tr>
      </table> 
      </div>
    );
  }
})

export default testBulma




