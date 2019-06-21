import React from "react"
import { stack as Menu } from "react-burger-menu"
import styled from "styled-components"

const MenuList = styled.ul`
  align-self: center;
  border: none;
  font-size: 3rem;
  justify-self: center;
  list-style: none;
  outline: none;
  text-decoration: none;
`

const styles = {
  bmBurgerButton: {
    zIndex: "4",
    height: "30px",
    position: "fixed",
    right: "32px",
    top: "36px",
    width: "36px",
  },
  bmBurgerBars: {
    background: "black",
    height: "4px",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "30px",
    position: "fixed",
    right: "32px",
    top: "34px",
    width: "36px",
  },
  bmCross: {
    background: "black",
    height: "30px",
  },
  bmMenuWrap: {
    position: "fixed",
  },
  bmMenu: {
    background: "linear-gradient(to right bottom, #db36a4, #f7ff00)",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#fff",
    padding: "0.8em",
    display: "grid",
    alignSelf: "center",
    justifySelf: "center",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, .5)",
  },
}

const Nav = () => (
  <Menu right styles={styles} width={"50vw"}>
    <MenuList>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </MenuList>
  </Menu>
)

export default Nav
