import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const SemanticUiGridList = () => (
  <Grid columns='equal'> 
    <Grid.Row>
      <Grid.Column width={4}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
      <Grid.Column width={4}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src='scripts/images/1.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default SemanticUiGridList