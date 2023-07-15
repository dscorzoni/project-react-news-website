import styled from "styled-components";
import Logo from "./assets/images/logo.svg";
import MenuIcon from "./assets/images/icon-menu.svg";
import MenuIconClose from "./assets/images/icon-menu-close.svg";
import { useState } from "react";

/* Styled Components */
const HeaderBar = styled.header`
  margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .menu-icon {
    display: none;
  }

  @media (max-width: 1440px) {
    padding: 2rem 1rem 1rem 1rem;
    margin: 0;
    .menu-icon {
      display: block;
    }
  }
`;

const Container = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    width: 375px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  gap: 3rem;

  a {
    text-decoration: none;
    color: hsl(236, 13%, 42%);
    font-weight: 400;
    font-size: 18px;
  }

  a:hover {
    color: hsl(5, 85%, 63%);
  }

  @media (max-width: 1440px) {
    display: none;
  }
`;

const MobileNavBar = styled.nav`
  position: absolute;
  background-color: hsl(36, 100%, 99%);
  padding: 1rem;

  .left-menu-body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .left-menu-header {
    text-align: right;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
  }

  a {
    text-decoration: none;
    color: hsl(236, 13%, 42%);
    font-weight: 400;
    font-size: 18px;
  }

  @media (max-width: 1440px) {
    height: 100vh;
    width: 60%;
    top: 0;
    right: 0;
  }
`;

/* Header Component */
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState("none");

  const handleMenu = () => {
    displayMenu === "none" ? setDisplayMenu("block") : setDisplayMenu("none");
  };

  return (
    <HeaderBar>
      <Container>
        <img src={Logo} alt="Logo" />
        <NavBar>
          <a href="index.html">Home</a>
          <a href="index.html">New</a>
          <a href="index.html">Popular</a>
          <a href="index.html">Trending</a>
          <a href="index.html">Categories</a>
        </NavBar>
        <img
          src={MenuIcon}
          alt="Menu hamburger"
          className="menu-icon"
          onClick={handleMenu}
        />
      </Container>
      <MobileNavBar style={{ display: displayMenu }}>
        <div className="left-menu">
          <div className="left-menu-header">
            <img src={MenuIconClose} alt="Close menu" onClick={handleMenu} />
          </div>
          <div className="left-menu-body">
            <a href="index.html">Home</a>
            <a href="index.html">New</a>
            <a href="index.html">Popular</a>
            <a href="index.html">Trending</a>
            <a href="index.html">Categories</a>
          </div>
        </div>
      </MobileNavBar>
    </HeaderBar>
  );
};

export default Header;
