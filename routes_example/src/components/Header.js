import React from 'react';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Students List</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="/students">
      Students
    </NavItem>
    <NavItem eventKey={2} href="/profile">
      Profile
    </NavItem>
    <NavItem eventKey={2} href="/about">
      About
    </NavItem>
  </Nav>
</Navbar>;