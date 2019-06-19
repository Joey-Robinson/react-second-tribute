import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  a {
    color: #222;
  }
  background-image: linear-gradient(
    to right,
    #00ff96,
    #89e64d,
    #bec900,
    #e4a600,
    #ff7d0a
  );
  color: #222;
  display: grid;
  font-weight: 700;
  grid-column: 1 / -1;
  grid-row: 5;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`

const Footer = () => (
  <StyledFooter>© {new Date().getFullYear()}, Built with</StyledFooter>
)

export default Footer
