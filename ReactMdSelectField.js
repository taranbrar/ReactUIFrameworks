import React, { PureComponent } from 'react';
import SelectField from 'react-md/lib/SelectFields';
import states from './states';

const stateItems = [''].concat(states);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class ReactMdSelectField extends PureComponent {
  render() {
    return (
      <section className="md-grid">
        <SelectField
          id="states"
          label="State"
          placeholder="Select a State"
          menuItems={stateItems}
          itemLabel="name"
          itemValue="abbreviation"
          className="md-cell"
          helpOnFocus
          helpText="Select some state for me"
        />
        <SelectField
          id="numbers"
          label="Some Number"
          placeholder="0"
          defaultValue={1}
          menuItems={numbers}
          className="md-cell"
        />
        <SelectField
          id="disabledNumbers"
          label="Disabled"
          disabled
          defaultValue={1}
          menuItems={numbers}
          className="md-cell"
        />
      </section>
    );
  }
}