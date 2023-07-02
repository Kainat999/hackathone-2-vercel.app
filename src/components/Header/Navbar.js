import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #f8f9fa;
  padding: 20px;
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  padding: 10px;

  &:hover {
    color: #ff0000;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Nav>
        <NavItem>
          <NavLink href="#">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">male</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">female</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">kids</NavLink>
        </NavItem>
      </Nav>
    </NavbarContainer>
  );
}

export default Navbar;
