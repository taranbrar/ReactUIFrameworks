import React from 'react'
import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

var SemanticUiTable = React.createClass(
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
    loadTable()
    {
        let faker = require('faker')
        let myItems = []
        for(let i = 0; i < 5000; i++)
        {
        let name = faker.Name.findName()
        myItems.push(<Table.Cell onClick={this.handleClick.bind(this, i)} index={i.toString()}>{name}</Table.Cell>)   
        }
        this.setState({myItems:myItems})
    },
    render()
    {
    return (
    <div style={{maxHeight: 200, overflow: 'auto'}}>
    <Button color='red' onClick={this.loadTable}>Load Table</Button>
    <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {this.state.myItems.map( (name, index) =>
              <Table.Row key={index}>
                  <Table.Cell>{name}</Table.Cell>
              </Table.Row>
              )}
      </Table.Body>
    </Table>
    </div>
  )
    }
   }
)

export default SemanticUiTable