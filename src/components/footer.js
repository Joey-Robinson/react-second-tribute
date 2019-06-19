import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-image: linear-gradient(
    to right,
    #00ff96,
    #89e64d,
    #bec900,
    #e4a600,
    #ff7d0a
  );
  display: grid;
  grid-column: 1 / -1;
  grid-row: 5;
`

const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
)

export default Footer
