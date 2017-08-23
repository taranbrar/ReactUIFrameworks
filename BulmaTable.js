import React from 'react'
import {Table, Thead, Tfoot, Tbody, Tr, Th, Td} from 're-bulma';
import { Button } from 're-bulma';


var BulmaTable = React.createClass(
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
          myItems.push(<Tr onClick={this.handleClick.bind(this, i)} index={i.toString()}>{name}</Tr>)   
          }
          this.setState({myItems:myItems})
      },
    render()
    {
    return(
   <div style={{maxHeight: 200, overflow: 'auto'}}>
     <Button color="isPrimary" onClick={this.loadTable}>Load Table</Button> 
        <Table>
        <Tbody>
                {this.state.myItems.map( (name, index) =>
            <Tr key={index}>{name}</Tr>
            )}
        </Tbody>
        </Table>
    </div>
 )
    }
  }
)
export default BulmaTable
