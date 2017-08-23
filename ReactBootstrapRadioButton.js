import React from 'react'
import {FormGroup, Radio} from 'react-bootstrap'

const ReactBootstrapRadioButton = () =>(
    <form>
        <Radio style={{color: 'white', paddingLeft: '100px'}} checked readOnly>
         Radio
        </Radio>
        <FormGroup style={{color: 'white', paddingLeft: '100px', paddingTop: '30px'}}> 
        <Radio name="radioGroup" inline>
            1
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
            2
        </Radio>
        {' '}
        <Radio name="radioGroup" inline>
            3
        </Radio>
        </FormGroup>
    </form>
);

export default ReactBootstrapRadioButton