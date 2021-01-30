import React from 'react';
import styled from 'styled-components';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #cd853f;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;
const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  /* grid-template-rows: 80px; */
  text-align: center;
  margin-bottom: 4rem;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;
const DropdownLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  isOpen: boolean;
  toggle: () => void;
  reset: () => void;
};

const Dropdown: React.FC<Props> = ({ isOpen, toggle, reset }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink style={{ display: isOpen ? 'block' : 'none' }} to={item.link} key={index}>
              <span onClick={reset}>{item.title}</span>
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button onClick={toggle} primary={true} round={true} big={true} to="/contact">
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
