import React, { PureComponent } from 'react';
import SelectField from 'react-md/lib/SelectFields';
import states from './states';

export default class ReactMdSelectFieldButton extends PureComponent {
  render() {
    return (
      <div className="md-grid">
        <SelectField
          id="selectButtonStates"
          placeholder="State"
          menuItems={states}
          itemLabel="abbreviation"
          itemValue="abbreviation"
          position={SelectField.Positions.BELOW}
          className="md-cell"
        />
        <SelectField
          id="selectButtonNumbers"
          placeholder="Number"
          position={SelectField.Positions.BELOW}
          menuItems={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          className="md-cell"
        />
      </div>
    );
  }
}