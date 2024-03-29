import React from "react"
import Nav from "./nav"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./footer"
import pepeone from "../images/pepeone.png"

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 100vh) 5vh;
  overflow-x: hidden;
  width: 100vw;
`

const NavWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  height: 30px;
  width: 36px;
  padding: 3rem;
  border-radius: 5rem;
  background: darkgray;
  box-shadow: 2px 2px black;
  z-index: 3;
`

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.6;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
`

const imagestyles = {
  position: "fixed",
  right: "40px",
  top: "16px",
  display: "block",
  width: "2rem",
  height: "2rem",
}

const Layout = ({ children }) => (
  <>
    <NavWrapper>
      <img style={imagestyles} src={pepeone} alt="Cute Pepe One" />
    </NavWrapper>
    <Nav />
    <StyledMain>
      <GlobalStyle />
      {children}
      <Footer />
    </StyledMain>
  </>
)

export default Layout
