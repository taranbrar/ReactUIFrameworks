import React from 'react'
import {Dropdown, Menu} from 'semantic-ui-react'


var SemanticUiDropDownPointingMail = React.createClass(
 {
  render()
  { 
    let faker = require('faker')
    let myItems = []
    for(let i = 0; i < 5; i++)
    {
      let name = faker.Name.findName()
      let email = faker.Internet.email();
      myItems.push(<Dropdown.Item key={i.toString()}>{name}</Dropdown.Item>)      
    }
 
    return(
      <div style={{height: '100px' , overflow: scroll}}> 
    <Menu vertical style={{height: '100px' , overflow: scroll}}>
      <Menu.Item>
        Home        
      </Menu.Item>
      <Dropdown text='Messages' pointing='left' className='link item'>
        <Dropdown.Menu>
          {myItems}
          {/* <Dropdown.Item>Inbox</Dropdown.Item>
          <Dropdown.Item>Starred</Dropdown.Item>
          <Dropdown.Item>Sent Mail</Dropdown.Item>
          <Dropdown.Item>Drafts (143)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Spam (1009)</Dropdown.Item>
          <Dropdown.Item>Trash</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        Browse
      </Menu.Item>
      <Menu.Item>
        Help
      </Menu.Item>
    </Menu>
    </div>
    )
  }
 }
)
 

export default SemanticUiDropDownPointingMail