import React from 'react'
import { Select } from 'semantic-ui-react'

var countryOptions = [{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
{ key: 'au', value: 'au', flag: 'au', text: 'Australia' }, { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' }]

const SemanticUiSelect = () => (
  <Select placeholder='Select your country' options={countryOptions} />
)

export default SemanticUiSelect