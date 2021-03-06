import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { stateOptions } from './common'

const SemanticUiMultipleSearchSelectionDropDown = () => (
  <Dropdown placeholder='State' fluid multiple search selection options={stateOptions} />
)

export default SemanticUiMultipleSearchSelectionDropDown