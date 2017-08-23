import React from 'react'
import { Button, Segment } from 'semantic-ui-react'

const SemanticUiInvertedButton = () => (
  <div>
    <Segment inverted>
      <Button inverted>Standard</Button>
      <Button inverted color='red'>Red</Button>
      <Button inverted color='orange'>Orange</Button>
      <Button inverted color='yellow'>Yellow</Button>
      <Button inverted color='olive'>Olive</Button>
    </Segment>
    <Segment inverted>
      <Button basic inverted>Standard</Button>
      <Button basic inverted color='violet'>Violet</Button>
      <Button basic inverted color='purple'>Purple</Button>
      <Button basic inverted color='pink'>Pink</Button>
      <Button basic inverted color='brown'>Brown</Button>
    </Segment>
  </div>
)

export default SemanticUiInvertedButton