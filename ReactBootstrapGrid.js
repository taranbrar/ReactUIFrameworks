import React from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'

const ReactBootstrapGrid = () => (
  <Grid style={{width: '800px'}}>
    <Row>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/1.jpg" rounded />
      </Col>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/2.jpg" rounded />
      </Col>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/3.jpeg" rounded />
      </Col>
    </Row>
     <Row style={{paddingTop: '30px'}}>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/4.jpg" rounded />
      </Col>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/6.jpg" rounded />
      </Col>
      <Col xs={4} md={2}>
        <Image style={{width: '100px', height: '100px'}} src="scripts/images/7.jpg" rounded />
      </Col>
    </Row>
  </Grid>
);

export default ReactBootstrapGrid
