import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { useAppContext } from "../../context/AppContext";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }
    .close-outline {
      display: none;
    }
   
 
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};
        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }
      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }
      .active .close-outline {
        display: inline-block;
      }
      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }
      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;
        .navbar-link {
          font-size: 4.2rem;
        }
      }
      
    }
  `;

  const NavbarToggle = () => {
    const { loginState } = useAppContext();

    if (loginState) {
      return (
        <>
          <li><NavLink to="/" className="navbar-link " onClick={() => setMenuIcon(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" className="navbar-link " onClick={() => setMenuIcon(false)}>Projects</NavLink></li>
          <li><NavLink to="/priceestimator" className="navbar-link " onClick={() => setMenuIcon(false)}>Cost Estimation</NavLink></li>
          <li><NavLink to="/contact" className="navbar-link " onClick={() => setMenuIcon(false)}>Contact</NavLink></li>
          <li><NavLink to="/logout" className="navbar-link " onClick={() => setMenuIcon(false)}>Logout</NavLink></li>
        </>
      )
    } else {
      return (
        <>
          <li><NavLink to="/" className="navbar-link " onClick={() => setMenuIcon(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" className="navbar-link " onClick={() => setMenuIcon(false)}>Projects</NavLink></li>
          <li><NavLink to="/priceestimator" className="navbar-link " onClick={() => setMenuIcon(false)}>Cost Estimation</NavLink></li>
          <li><NavLink to="/contact" className="navbar-link " onClick={() => setMenuIcon(false)}>Contact</NavLink></li>
          <li><NavLink to="/login" className="navbar-link " onClick={() => setMenuIcon(false)}>Login</NavLink></li>
          <li><NavLink to="/signup" className="navbar-link " onClick={() => setMenuIcon(false)}>SignUp</NavLink></li>
        </>
      );
    }
  }
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
          <NavbarToggle />
        </ul>

        {/* Responsive NavBar */}
        <div className='mobile-navbar-btn'>
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>

      </div>
    </Nav>
  )
}

export default Nav