import React from 'react'
import ReactDOM from "react-dom"
import ReactWidgets from 'react-widgets'
var Calendar = ReactWidgets.Calendar;

var ReactWidgetCalendar = React.createClass({

  getInitialState() {
    return { value0: new Date() };
  },

  render() {
    var change = (name, value) => this.setState({
        ['value' + name]: value
      });

    return (
      <Calendar
        value={this.state.value0}
        onChange={change.bind(null, '0')}/>
    )
  }
});

export default ReactWidgetCalendar