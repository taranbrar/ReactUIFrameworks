import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
};
var MuiTable = React.createClass (
  {
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
        myItems.push(<TableRowColumn  index={i.toString()}>{name}</TableRowColumn>)
        }
      this.setState({myItems:myItems})
    },
    render() {
      return (
        <div>
          <RaisedButton label="Load Table" secondary={true} onClick={this.loadTable} />
          <Paper style={{maxHeight: 200, overflow: 'auto'}}>
          <Table multiSelectable='true'>
            <TableBody>
              {this.state.myItems.map( (name, index) =>
                <TableRow key={index}>
                    <TableRowColumn>{index}</TableRowColumn>
                    <TableRowColumn>{name}</TableRowColumn>
                </TableRow>
                )}
            </TableBody>
          </Table>
          </Paper>
        </div>
      );
    }
    }
  )

export default MuiTable