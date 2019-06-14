import React from "react"
import { stack as Menu } from "react-burger-menu"
import styled from "styled-components"

const MenuDiv = styled.div`
  display: block;
  padding: 1rem;
  background: orange;
  position: fixed;
  width: 46px;
  height: 40px;
  right: 32px;
  top: 32px;
  border-radius: 10rem;
`

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
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
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
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
    background: "rgba(0, 0, 0, 0.3)",
  },
}

const Nav = () => (
  <MenuDiv>
    <Menu right styles={styles}>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
      </ul>
    </Menu>
  </MenuDiv>
)

export default Nav
