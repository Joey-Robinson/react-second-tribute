import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"

const ModalOpenButton = styled.button`
  align-self: start;
  background: #00ff96;
  border-radius: 5rem;
  border: none;
  color: #ff7d0a;
  cursor: pointer;
  font-size: 2rem;
  grid-row: -1;
  grid-column: 3;
  justify-self: center;
  outline: none;
  padding: 1rem 1.5rem;
  width: 100%;
  &:hover {
    box-shadow: 0 1rem 2rem rgba(#666, 0.2);
    transform: translateY(-3px);
    &::after {
      opacity: 0;
      transform: scaleX(1.4) scaleY(1.6);
    }
  }
  &:active,
  &:focus {
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
    outline: none;
    transform: translateY(-1px);
  }
`

const ModalCloseButton = styled.button`
  align-self: start;
  background: #ff7d0a;
  border-radius: 5rem;
  border: none;
  color: #00ff96;
  cursor: pointer;
  font-size: 2rem;
  grid-column: 3;
  grid-row: -1;
  justify-self: center;
  outline: none;
  padding: 1rem 1.5rem;
  width: 100%;
  &:hover {
    box-shadow: 0 1rem 2rem rgba(#666, 0.2);
    transform: translateY(-3px);
    &::after {
      opacity: 0;
      transform: scaleX(1.4) scaleY(1.6);
    }
  }
  &:active,
  &:focus {
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
    outline: none;
    transform: translateY(-1px);
  }
`

const ModalRecent = styled.div`
  align-self: start;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  justify-self: center;
  margin: 1.5rem 0 0 0;
`

const ModalBest = styled.div`
  align-self: start;
  grid-column: 3 / -1;
  grid-row: 1 / 3;
  justify-self: center;
  margin: 1.5rem 0 0 0;
`

const ModalWeeklyBest = styled.div`
  align-self: center;
  grid-column: 1 / 3;
  grid-row: 3 / -1;
  justify-self: center;
  margin: 1.5rem 0 0 0;
`

const ModalOverallHighest = styled.div`
  align-self: center;
  grid-column: 4;
  grid-row: 3 / -1;
  justify-self: center;
  margin: 1.5rem 0 0 0;
`

const MeerkatzModal = ({ recent, best, weeklyBest, highest }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const modalStyles = {
    alignSelf: "center",
    gridColumn: "2",
    gridRow: "5",
    justifySelf: "center",
  }

  const modalLayout = {
    content: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gridTemplateRows: "repeat(5, 1fr)",
    },
    overlay: {
      background: "rgba(0, 0, 0, .75)",
    },
  }

  return (
    <div style={modalStyles}>
      <ModalOpenButton onClick={() => setModalIsOpen(!modalIsOpen)}>
        See More
      </ModalOpenButton>
      <Modal
        style={modalLayout}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        contentLabel="Meerkatz Modal"
      >
        <ModalRecent>
          <ul style={{ listStyle: "none", fontSize: "2rem", padding: "1rem" }}>
            <h1 style={{ textAlign: "center" }}>Recent M+</h1>
            {recent}
          </ul>
        </ModalRecent>
        <ModalBest>
          <ul style={{ listStyle: "none", fontSize: "2rem", padding: "1rem" }}>
            <h1 style={{ textAlign: "center" }}>Recent M+</h1>
            {best}
          </ul>
        </ModalBest>
        <ModalWeeklyBest>
          <ul style={{ listStyle: "none", fontSize: "2rem", padding: "1rem" }}>
            <h1 style={{ textAlign: "center" }}>Weekly Best M+</h1>
            {weeklyBest}
          </ul>
        </ModalWeeklyBest>
        <ModalOverallHighest>
          <ul style={{ listStyle: "none", fontSize: "2rem", padding: "1rem" }}>
            <h1
              style={{
                textAlign: "center",
              }}
            >
              Highest M+
            </h1>
            {highest}
          </ul>
        </ModalOverallHighest>
        <ModalCloseButton onClick={() => setModalIsOpen(!modalIsOpen)}>
          Close
        </ModalCloseButton>
      </Modal>
    </div>
  )
}

export default MeerkatzModal
