import React from 'react'
import ReactDOM from "react-dom"
import ReactWidgets from 'react-widgets'
var Multiselect = ReactWidgets.Multiselect
  , colors = ['orange', 'red', 'blue', 'purple'];
var ReactWidgetMultiSelect = React.createClass({
  getInitialState() {
    return { value: colors.slice(0,1) };
  },
  render() {
    return (
      <Multiselect
        data={colors}
        value={this.state.value}
        onChange={value => this.setState({ value })}/>)
  }
});
export default ReactWidgetMultiSelect












