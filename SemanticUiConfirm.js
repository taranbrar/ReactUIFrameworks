import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class SemanticUiConfirm extends Component {
  getInitialState() {
      return {
          open: false
         }
  }

  show() {this.setState({ open: true })}
  handleConfirm() {this.setState({ open: false })}
  handleCancel() {this.setState({ open: false })}

  render() {
    return (
      <div>
        <Button onClick={this.show}>Show</Button>
        <Confirm
          open={this.getInitialState.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </div>
    )
  }
}

export default SemanticUiConfirm