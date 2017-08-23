import React from 'react'
import SemanticUiButton from './SemanticUiButton'
import SemanticUiAnimatedButton from './SemanticUiAnimatedButton'
import SemanticUiInvertedButton from './SemanticUiInvertedButton'
import SemanticUiLabel from './SemanticUiLabel'
import SemanticUiInputBox from './SemanticUiInputBox'
import SemanticUiList from './SemanticUiList'
import SemanticUiGridList from './SemanticUiGridList'
import SemanticUiAccordion from './SemanticUiAccordion'
import SemanticUiCheckBox from './SemanticUiCheckBox'
import SemanticUiDropDownList from './SemanticUiDropDownList'
import SemanticUiSearchSelection from './SemanticUiSearchSelection'
import SemanticUiModal from './SemanticUiModal'
import SemanticUiMultipleSearchSelectionDropDown from './SemanticUiMultipleSearchSelectionDropDown'
import SemanticUiDropDownPointing from './SemanticUiDropDownPointing'
import SemanticUiDropDownPointingMail from './SemanticUiDropDownPointingMail'
import SemanticUiPopup from './SemanticUiPopup'
import SemanticUiSelect from './SemanticUiSelect'
import SemanticUiTextArea from './SemanticUiTextArea'
import SemanticUiRadioButton from './SemanticUiRadioButton'
import SemanticUiTable from './SemanticUiTable'

var testSemanticUi = React.createClass(
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
    let faker = require('faker')
    
    for(let i = 0; i < 10; i++)
    {
      let name = faker.Name.findName()
      let email = faker.Internet.email();

      console.log(name + ", " + email)
    }
    return (     
      <div>
     <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
    <table>
      <tr>
        <th style={{fontSize:'30px', color: 'Black', textAlign: 'right', paddingTop: '30px'}}>Semantic UI Components</th>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Semantic UI Buttons</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Semantic Animated Buttons</th>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Semantic Inverted Buttons</th>
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <SemanticUiButton/>
        </td >
        <td style={{paddingTop: '30px', paddingLeft: '100px', width: '500px'}}>
          <SemanticUiAnimatedButton/>
        </td>
        <td style={{paddingTop: '30px', paddingLeft: '50px', width: '500px'}}>
          <SemanticUiInvertedButton/>
        </td>
      </tr>

      <tr>
        <td>

      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>Semantic UI Label</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '300px'}}>
          <SemanticUiLabel/>
        </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Semantic UI Input Box</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <SemanticUiInputBox/>
        </td>
      </tr>

      </td>
      <td>
      <tr>
      <th style={{fontSize:'20px', color: 'Black', paddingTop: '30px'}}>Semantic UI List</th> 
      </tr>
      <tr>
      <td style={{paddingTop: '50px', width: '500px', paddingLeft: '100px'}}>
        <SemanticUiList/>
      </td>
      </tr>
      </td>
      <td>
      <tr>
      <th style={{fontSize:'20px', color: 'Black'}}>Semantic UI Accordion</th> 
      </tr>
      <tr>
      <td style={{paddingTop: '40px', width: '500px', paddingLeft: '100px'}}>
       <SemanticUiAccordion/>
      </td>
      </tr>
      </td>
      </tr>
      <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>Semantic UI Grid List</th> 
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>Semantic UI Check Box</th> 
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '50px'}}>Semantic UI Modal</th>  
      </tr>
      <tr>
        <td style={{paddingTop: '30px', width: '500px'}}>
          <SemanticUiGridList/>
        </td>
        <td style={{paddingTop: '30px', paddingLeft: '100px', width: '500px'}}>
        <SemanticUiCheckBox/>
        </td>
        <td style={{paddingTop: '30px', paddingLeft: '100px', width: '500px'}}>
          <SemanticUiModal/>
        </td>
      </tr>
        <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Drop Down List</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Search Selection</th> 
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px', paddingLeft: '150px'}}>Semantic UI Multiple Search Selection DropDown</th>  
        </tr>
        <tr>
        <td style={{width: '300px', paddingLeft: '100px'}}>
        <SemanticUiDropDownList/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '50px', width: '300px'}}>
          <SemanticUiSearchSelection/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '200px', width: '300px'}}>
        <SemanticUiMultipleSearchSelectionDropDown/>
        </td>
        </tr>
        <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Drop Down Pointing</th> 
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Drop Down Pointing Mail</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Popup</th>  
        </tr>
        <tr>
        <td style={{paddingTop: '100px', paddingLeft: '20px', width: '300px'}}>
          <SemanticUiDropDownPointing/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '200px', width: '300px'}}>
          <SemanticUiDropDownPointingMail/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '250px', width: '300px'}}>
          <SemanticUiPopup/>
        </td>
        </tr>

        <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Select</th> 
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Text Area</th>  
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Radio Button</th>  
        </tr>
        <tr>
        <td style={{paddingTop: '100px', paddingLeft: '50px', width: '300px'}}>
          <SemanticUiSelect/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '100px', width: '300px'}}>
          <SemanticUiTextArea/>
        </td>
        <td style={{paddingTop: '100px', paddingLeft: '250px', width: '300px'}}>
          <SemanticUiRadioButton/>
        </td>
        </tr>
        <tr>
        <th style={{fontSize:'20px', color: 'Black', paddingTop: '70px'}}>Semantic UI Table</th>
        </tr>
        <tr>
        <td style={{paddingTop: '100px', paddingLeft: '50px', width: '300px'}}>
          <SemanticUiTable/>
        </td>
        </tr>
      </table> 
      </div>
  
    );
  }
})

export default testSemanticUi
