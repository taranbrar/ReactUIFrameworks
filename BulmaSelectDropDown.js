import React from 'react'
import {Label, Select } from 're-bulma';

function alertClicked() {
  alert('You clicked the ListGroupItem');
}

var BulmaSelectDropDown = React.createClass(
    {
    render()
    {
      let faker = require('faker')
      let myItems = []
      for(let i = 0; i < 1000; i++)
      {
      let name = faker.Name.findName()
      myItems.push(<option  index={i.toString()}>{name}</option>)   
      }
    return(
   <div style={{maxHeight: 200, overflow: 'auto'}}>
    <Label>Subject</Label>
    <Select>
        <option>Select dropdown</option>
        {myItems.map( (name, index) => 
            <option onClick={alertClicked} key={index}>{name}</option>
            )}
    </Select>
    </div>
)
    }
  }
)

export default BulmaSelectDropDown