import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsHandbag } from "react-icons/bs";
import { CgMenu, CgClose } from "react-icons/cg";
import { useAppContext } from "../../context/AppContext";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  // console.log(state);


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
    .cart-trolley--link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.4rem;
      }
      .cart-total--item {
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        background-color: #000;
        border-radius: 50%;
        font-size: 1.3rem;
        font-weight: 600;

        color: #010C80;
        display: grid;
        place-items: center;
        top: 33%;
        left: 14%;
        /* background-color: ${({ theme }) => theme.colors.helper}; */
        background-color: transparent;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
    .user-login--name {
      text-transform: capitalize;
    }
    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
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
      .cart-trolley--link {
        position: relative;
        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }
        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 1.8rem;
        }
      }
      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  const NavbarToggle = () => {

    const state = useAppContext();


    if (state.loginState) {
      return (
        <>
          <li><NavLink to="/" className="navbar-link " onClick={() => setMenuIcon(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" className="navbar-link " onClick={() => setMenuIcon(false)}>Projects</NavLink></li>
          <li><NavLink to="/priceestimator" className="navbar-link " onClick={() => setMenuIcon(false)}>Cost Estimation</NavLink></li>
          <li><NavLink to="/contact" className="navbar-link " onClick={() => setMenuIcon(false)}>Contact</NavLink></li>
          <li><NavLink to="/logout" className="navbar-link " onClick={() => setMenuIcon(false)}>Logout</NavLink></li>

          <li>
            <NavLink to="/wishlist" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <BsHandbag className='cart-trolley' />
              <span className='cart-total--item'>10</span>
            </NavLink>
          </li>

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
          {/* 
          <li>
            <NavLink to="/wishlist" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <BsHandbag className='cart-trolley' />
              <span className='cart-total--item'>10</span>
            </NavLink>
          </li> */}

        </>
      );
    }
  }



  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className='navbar-lists'>
          {/* <li><NavLink to="/" className="navbar-link " onClick={() => setMenuIcon(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" className="navbar-link " onClick={() => setMenuIcon(false)}>Projects</NavLink></li>
          <li><NavLink to="/priceestimator" className="navbar-link " onClick={() => setMenuIcon(false)}>Cost Estimation</NavLink></li>
          <li><NavLink to="/contact" className="navbar-link " onClick={() => setMenuIcon(false)}>Contact</NavLink></li>
          <li><NavLink to="/login" className="navbar-link " onClick={() => setMenuIcon(false)}>Login</NavLink></li>

          <li><NavLink to="/signup" className="navbar-link " onClick={() => setMenuIcon(false)}>SignUp</NavLink></li>

          <li>
            <NavLink to="/wishlist" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
              <BsHandbag className='cart-trolley' />
              <span className='cart-total--item'>10</span>
            </NavLink>
          </li> */}

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