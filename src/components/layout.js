import React from "react"
import Nav from "./nav"
import styled, { createGlobalStyle } from "styled-components"
import Footer from "./footer"

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100vh) 25vh;
  overflow-x: hidden;
  width: 100vw;
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
  }
`

const Layout = ({ children }) => (
  <>
    <Nav />
    <StyledMain>
      <GlobalStyle />
      {children}
      <Footer />
    </StyledMain>
  </>
)

export default Layout
