import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

var ReactBootstrapList = React.createClass(
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
        myItems.push(<ListGroupItem  onClick={this.handleClick.bind(this, i)} index={i.toString()}>{name}</ListGroupItem>)   
        }
        this.setState({myItems:myItems})
    },
    render()
    {
    return(
      <div style={{maxHeight: 200, overflow: 'auto'}}>
        <Button bsStyle="primary" onClick={this.loadList}>Load List</Button>
        <ListGroup>
          {this.state.myItems.map( (name, index) =>
            <ListGroupItem key={index}>{name}</ListGroupItem>
            )}
        </ListGroup>
      </div>
    )
    }
  }
)
export default ReactBootstrapList