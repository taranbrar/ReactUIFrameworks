import React from 'react'
import {FormGroup, Checkbox} from 'react-bootstrap'

const ReactBootstrapCheckbox = () =>(
    <form>
         <Checkbox style={{color: 'white', paddingLeft: '100px'}} checked readOnly>
            Checkbox
         </Checkbox>
         <FormGroup style={{color: 'white', paddingLeft: '100px', paddingTop: '30px'}}>
            <Checkbox inline>
                1
            </Checkbox>
            {' '}
            <Checkbox inline>
                2
            </Checkbox>
            {' '}
            <Checkbox inline>
                3
            </Checkbox>
         </FormGroup>
    </form>
);

export default ReactBootstrapCheckbox