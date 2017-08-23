import React from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'

const SemanticUiLabel = () => (
  <Form>
    <Form.Field>
      <input type='text' placeholder='Name' />
      <Label pointing>Please enter a value</Label>
    </Form.Field>
  </Form>
)

export default SemanticUiLabel