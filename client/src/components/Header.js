import React from 'react'
import Nav from './subcomponents/Nav';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 6rem;
  }
`;

const Header = () => {

  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/images/logo.png" className='logo' />
      </NavLink>
      <Nav />
    </MainHeader>
  )
}

export default Header