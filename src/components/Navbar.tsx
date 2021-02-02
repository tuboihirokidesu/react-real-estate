import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import Bars from '../images/bars.svg';

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
`;
const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    z-index: 999;
    display: block;
    /* font-size: 24px; */
    cursor: pointer;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

type Props = {
  toggle: () => void;
};

const Navbar: React.FC<Props> = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary={true} big={false}>
          Contact
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
