import React from 'react'
import ReactDOM from "react-dom"
import ReactWidgets from 'react-widgets'
var DropdownList=ReactWidgets.DropdownList
var xyz = [
    {id: 0, name:'A'},
    {id: 1, name:'B'},
    {id: 2, name:'C'},
    {id: 3, name:'D'},
];
var ReactWidgetDropDownList = React.createClass(
  {
    render()
    {
      return(
        <DropdownList
        valueField='id' textField='name'
        data={xyz}
        defaultValue={1}/>)
    }
  }
)
export default ReactWidgetDropDownList