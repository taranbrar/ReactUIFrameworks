import React from 'react';
import List from 'react-md/lib/Lists/List';
import ListItem from 'react-md/lib/Lists/ListItem';
import Button from 'react-md/lib/Buttons/Button';

var ReactMdList = React.createClass(
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
      myItems.push(<ListItem onClick={this.handleClick.bind(this, i)} index={i.toString()}>{name}</ListItem>)   
      }
      this.setState({myItems:myItems})
    },
    render()
    {
    return(
    <div style={{maxHeight: 200, overflow: 'auto'}}>
    <div className="md-grid">
    <Button raised primary label="Load List" onClick={this.loadList} />
    <List style={{width: '200px'}} className="md-cell md-paper md-paper--1">
      {this.state.myItems.map( (name, index) => 
        <ListItem key={index}>{name}</ListItem>
         )}
    </List>
    </div>
    </div>
    )
    }
  }
)
export default ReactMdList;