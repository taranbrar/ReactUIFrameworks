import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { countryOptions } from './common'

//var countryOptions = [ { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }, { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
//{ key: 'au', value: 'au', flag: 'au', text: 'Australia' }, { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada'}]

const SemanticUiSearchSelection = () => (
  <Dropdown placeholder='Select Country' fluid search selection options={countryOptions} />
)

export default SemanticUiSearchSelection