import React, { PureComponent } from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import loremIpsum from 'lorem-ipsum';
import Button from 'react-md/lib/Buttons/Button';

var ReactMdTable = React.createClass(
  {
  handleClick(i) {
      console.log("List clicked", i.toString())
      alert("You clicked " + i.toString())
      },
  getInitialState() {
      return {
        rows:[],      
      }
  },
  loadTable()
    {
    const rows = [...new Array(5000)].map((_, i) => (
      <TableRow onClick={this.handleClick.bind(this, i)} id={i.toString()} key={i}>
        <TableColumn>{loremIpsum({ count: 5, units: 'words' })}</TableColumn>
        <TableColumn style={{color:'red',fontSize:'36px'}}>Hello</TableColumn>
      </TableRow>
    ));
     this.setState({rows:rows})
    },
  render() {
    // const rows = [...new Array(100)].map((_, i) => (
    //   <TableRow key={i}>
    //     <TableColumn>{loremIpsum({ count: 5, units: 'words' })}</TableColumn>
    //     <TableColumn>{loremIpsum({ count: 5, units: 'words' })}</TableColumn>
    //   </TableRow>
    // ));
    return (
      <div style={{maxHeight: 200, overflow: 'auto'}}>
      <Button raised primary label="Load Table" onClick={this.loadTable} />
      <DataTable plain>
        <TableHeader>
          <TableRow>
            <TableColumn>Lorem 1</TableColumn>
            <TableColumn>Lorem 2</TableColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.rows}
        </TableBody>
      </DataTable>
      </div>
    );
  }
  }
)

export default ReactMdTable