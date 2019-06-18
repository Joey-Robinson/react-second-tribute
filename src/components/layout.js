import React from "react"
import Nav from "./nav"
import styled, { createGlobalStyle } from "styled-components"

const StyledMain = styled.main`
  overflow-x: hidden;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100vh) auto;
`

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
    font-weight: 300;
    line-height: 1.6;
  }
`

const Layout = ({ children }) => (
  <>
    <Nav />
    <StyledMain>
      <GlobalStyle />
      {children}
    </StyledMain>
  </>
)

export default Layout
