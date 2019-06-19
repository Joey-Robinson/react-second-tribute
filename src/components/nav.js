import React from "react"
import { stack as Menu } from "react-burger-menu"
// import { Link } from "gatsby"
// import styled from "styled-components"

// const MenuContainer = styled.div`
//   background: orange;
//   border-radius: 10rem;
//   display: block;
//   height: 40px;
//   padding: 1rem;
//   position: fixed;
//   right: 32px;
//   top: 32px;
//   width: 46px;
// `

const styles = {
  bmBurgerButton: {
    height: "30px",
    position: "fixed",
    right: "36px",
    top: "36px",
    width: "36px",
  },
  bmBurgerBars: {
    background: "black",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    height: "100%",
    position: "fixed",
  },
  bmMenu: {
    background: "#373a47",
    fontSize: "1.15em",
    padding: "2.5em 1.5em 0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, .5)",
  },
}

const Nav = () => (
  <Menu right styles={styles}>
    <ul>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  </Menu>
)

export default Nav
