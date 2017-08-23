import React from 'react'
import ReactDOM from "react-dom"
import ReactWidgets from 'react-widgets'
var SelectList = ReactWidgets.SelectList
  , colors = ['orange', 'red', 'blue', 'purple'];

var ReactWidgetSelect = React.createClass({

    getInitialState() {
        return { value: colors.slice(0,1) };
    },
    render() {
        return (
        <SelectList
            data={colors}
            value={this.state.value}
            onChange={value => this.setState({ value })}/>)
    }
    });

export default ReactWidgetSelect