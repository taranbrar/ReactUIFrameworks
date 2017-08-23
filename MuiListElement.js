import React from 'react'
import Avatar from 'material-ui/Avatar'
import List from 'material-ui/List'
import ListItem from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider' 
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper';

var MuiListElement = React.createClass(
  {
    handleClick(i) {
    console.log("List clicked", i.toString())
    alert("You clicked " + i.toString())
    
},
  getInitialState() {
    return {
      myItems:[],      
    }
  },
  loadList()
  {
    let faker = require('faker')

    let myItems = []
    for(let i = 0; i < 5000; i++)
      {
      let name = faker.Name.findName()
      myItems.push(<ListItem  onClick={this.handleClick.bind(this, i)} key={i} index={i.toString()}>{name}</ListItem>)   
      }
    this.setState({myItems:myItems})
  },
    render()
    {
    return(
      <div style={{width:'400px'}}>
      <RaisedButton label="Load List" secondary={true} onClick={this.loadList} />
      <Paper style={{maxHeight: 200, overflow: 'auto'}}>
      <List>
         {this.state.myItems.map( (name, index) => 
        <ListItem key={index}>{name}</ListItem>
         )}
      </List>
      </Paper>
      </div>
    )
    },
  }
)

export default MuiListElement

