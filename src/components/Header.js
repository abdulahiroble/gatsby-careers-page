import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import NakedList from '../utils/NakedList';
import Logo from '../images/logo.svg';
import media from '../utils/media';

const Nav = styled.nav`
  display: flex;
  justify-content: ${props => (props.logo ? 'space-between' : 'flex-end')};
  align-items: center;
  padding: 0 4rem;
  height: 6rem;
  background-color: #ffffff;

  ${media.tablet`
    justify-content: center;
  `}
`;

const NavList = styled(NakedList)`
  display: flex;

  /* ${media.tablet`
    display: none;
  `} */
  
  ${media.tablet`
    display: flex;
    justify-content: space-evenly
  `}
`;

const NavItems = styled.li`
  text-transform: uppercase;
  padding: 0 1rem;
  /* margin: 0 1rem; */
`;

// const StyledLogo = styled(Logo)`
//   height: 2rem;
// `;

const Header = ({ logo }) => (
  <Nav logo={logo}>
    <NavList>
      <NavItems>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          Home
        </Link>
      </NavItems>
      <NavItems>
        <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
          About
        </Link>
      </NavItems>
      <NavItems>
        <Link
          to="/postajob"
          style={{
            textDecoration: 'none',
            backgroundColor: '#f01818',
            borderRadius: '20px',
            border: '1px solid #f01818',
            display: 'inline-block',
            cursor: 'pointer',
            color: '#fff',
            fontFamily: 'Arial',
            fontSize: '12px',
            padding: '5px 20px',
            textShadow: '0px 1px 0px #2f6627',
          }}
        >
          Post A Job!
        </Link>
      </NavItems>
    </NavList>
  </Nav>
);

Header.defaultProps = {
  logo: false,
};

Header.propTypes = {
  logo: PropTypes.bool,
};

export default Header;
