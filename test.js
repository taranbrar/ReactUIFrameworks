import React from 'react'
import ReactDOM from "react-dom"
import testMui from './testMui'
import testSemanticUi from './testSemanticUi'
import testReactBootstrap from './testReactBootstrap'
import testReactMd from './testReactMd'
import testReactWidget from './testReactWidget'
import testBulma from './testBulma'
import RaisedButton from 'material-ui/RaisedButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

var MyConfig={testCount:1000, myColor:'blue'}

var Test = React.createClass(
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

  handleOnClick(){
    window.open('C:\Projects\ReactComponents\app\scripts\testMui.js')
  },
  
  render() 
  {
    return (  
      <MuiThemeProvider>
      <div>
                <table>
                <tr>
                  <th style={{fontSize:'30px', color: 'Black', paddingLeft: '400px', paddingTop: '30px'}}>React UI Frameworks</th></tr>
                <tr>
                  <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}></th>  
                  <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}></th>
                </tr>
                <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testMui"><RaisedButton primary={true} label='Material UI Components'/></Link>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testSemanticUi"><RaisedButton secondary={true} label='Semantic UI React Components'/></Link>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testReactMd"><RaisedButton primary={true} label='React MD Components'/></Link>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testReactBootstrap"><RaisedButton secondary={true} label='React Bootstrap Components'/></Link>
                  </td>
                </tr>
                <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testReactWidget"><RaisedButton primary={true} label='React Widget Components'/></Link>
                  </td>
                </tr>
                 <tr>
                  <td style={{paddingTop: '20px',paddingLeft: '700px',paddingTop: '50px', width: '600'}}>
                  <Link to="/testBulma"><RaisedButton secondary={true} label='React Bulma Components'/></Link>
                  </td>
                </tr>
                </table>
      </div>
       </MuiThemeProvider>
    );
  }
})

export default Test


