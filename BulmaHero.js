import React from 'react'
import {Hero, HeroHead, Nav, Container, NavGroup, NavItem, NavToggle, Button, HeroBody, Title, Subtitle, HeroFoot, Tabs, Tab} from 're-bulma';


const BulmaHero = () => (
<div>
  <Hero color="isPrimary" size="isMedium">
  <HeroHead>
    <Nav>
      <Container>
        <NavGroup align="left">
          <NavItem>
            <img src="logo.png" alt="Logo" />
          </NavItem>
        </NavGroup>
        <NavToggle />
        <NavGroup align="right" isMenu>
          <NavItem isActive>
              Home
            </NavItem>
            <NavItem>
              Examples
            </NavItem>
            <NavItem>
              Documentation
            </NavItem>
            <NavItem>
              <Button states="isInverted" icon="fa fa-github">Github</Button>
            </NavItem>
          </NavGroup>
        </Container>
      </Nav>
    </HeroHead>
    <HeroBody>
      <Container hasTextCentered>
        <Title>Hero title</Title>
        <Subtitle>Hero subtitle</Subtitle>
      </Container>
    </HeroBody>
    <HeroFoot>
      <Tabs tabStyle="isBoxed">
        <Container>
          <ul>
            <Tab>Overview</Tab>
            <Tab>Modifiers</Tab>
            <Tab>Grid</Tab>
            <Tab>Elements</Tab>
            <Tab>Components</Tab>
            <Tab>Layout</Tab>
          </ul>
        </Container>
      </Tabs>
    </HeroFoot>
  </Hero>
</div>
);

export default BulmaHero