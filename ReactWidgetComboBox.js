import React from 'react'
import ReactDOM from "react-dom"
import ReactWidgets from 'react-widgets'
var Combobox=ReactWidgets.Combobox
var colors =['Red', 'Black', 'White', 'Purple', 'Orange'];
var ReactWidgetComboBox = React.createClass(
  {
    getInitialState()
    {
      return {value: colors[0]};
    },
    render()
    {
      return(
        <Combobox
        data={colors}
        value={this.state.value}
        onChange={value => this.setState({value})}/>)
    }
  }
)
export default ReactWidgetComboBox