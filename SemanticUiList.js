import React from 'react'
import { List } from 'semantic-ui-react'

var SemanticUiList = React.createClass(
 { render()
    {
      let faker = require('faker')
      let myItems = []
      for(let i = 0; i < 5; i++)
      {
      let name = faker.Name.findName()
      myItems.push(<List.Item key={i.toString()}>{name}</List.Item>)   
      }
    return(
  <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        {myItems}
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
    )
    }
 }
)

export default SemanticUiList