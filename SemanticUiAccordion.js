import React from 'react'
import { Accordion, Icon } from 'semantic-ui-react'

const SemanticUiAccordion = () => (
  <Accordion>
    <Accordion.Title>
      <Icon name='dropdown' />
      This is Title 1.
    </Accordion.Title>
    <Accordion.Content>
      <p>
        You can write paragraph 1 here.
      </p>
    </Accordion.Content>
    <Accordion.Title>
      <Icon name='dropdown' />
      This is Title 2.
    </Accordion.Title>
    <Accordion.Content>
      <p>
        You can write paragraph 2 here.
      </p>
    </Accordion.Content>
    <Accordion.Title>
      <Icon name='dropdown' />
      This is Title 3.
    </Accordion.Title>
    <Accordion.Content>
      <p>
        You can write paragraph 3(Part 1) here.
      </p>
      <p> You can write paragraph 3(Part 2) here.
      </p>
    </Accordion.Content>
  </Accordion>
)
export default SemanticUiAccordion