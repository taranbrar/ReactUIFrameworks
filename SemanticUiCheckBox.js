import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const CheckboxExampleCheckbox = () => (
  <div>
  <Checkbox style={{paddingLeft: '50px'}} label='Checkbox' />
  <Checkbox style={{paddingLeft: '50px'}} radio label='Radio choice' />
  <Checkbox style={{paddingLeft: '50px'}} toggle />
  <Checkbox style={{paddingLeft: '50px'}} slider/>
  </div>
)

export default CheckboxExampleCheckbox