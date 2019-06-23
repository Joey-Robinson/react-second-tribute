import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
  a {
    color: #222;
  }
  background-image: linear-gradient(
    to right top,
    #e7e0e0,
    #ebe6e7,
    #efebed,
    #f4f1f3,
    #f8f7f8,
    #f7f6f7,
    #f5f5f5,
    #f4f4f4,
    #ececec,
    #e3e3e3,
    #dbdbdb,
    #d3d3d3
  );
  color: black;
  display: grid;
  font-weight: 700;
  grid-column: 1 / -1;
  grid-row: 6;
  height: 5vh;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
`

const FooterMaker = styled.div`
  align-self: end;
  grid-column: 1 / -1;
  justify-self: center;
  font-size: 1.4rem;
  grid-row: 1;
  width: 100%;
  text-align: center;
  a {
    font-size: 1.2rem;
    text-decoration: none;
  }
`

const FooterResources = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  align-self: end;
  justify-self: center;
`

const Footer = () => (
  <StyledFooter>
    <FooterMaker>
      © {new Date().getFullYear()} Joey Robinson&nbsp;&nbsp;
      <a
        href="https://twitter.com/joeyrobinsondev"
        target="_blank"
        rel="noopener noreferrer"
      >
        @joeyrobinsondev
      </a>
    </FooterMaker>
    <FooterResources>
      <Link to="/resources/">Resources</Link>
    </FooterResources>
  </StyledFooter>
)

export default Footer
