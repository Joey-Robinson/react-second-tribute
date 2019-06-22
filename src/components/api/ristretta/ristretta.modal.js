import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"

const ModalOpenButton = styled.button`
  grid-row: -1;
  grid-column: 3;
  justify-self: center;
  align-self: start;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background: #ff7d0a;
  color: #00ff96;
  border-radius: 5rem;
  font-size: 2rem;
  width: 100%;
  border: none;
  outline: none;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#666, 0.2);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }
`

const ModalCloseButton = styled.button`
  grid-row: -1;
  grid-column: 3;
  justify-self: center;
  align-self: start;
  padding: 1rem 1.5rem;
  cursor: pointer;
  background: #ff7d0a;
  color: #00ff96;
  border-radius: 5rem;
  font-size: 2rem;
  width: 100%;
  border: none;
  outline: none;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(#666, 0.2);
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(black, 0.2);
  }
`

const ModalRecent = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 3;
  align-self: start;
  margin: 1.5rem 0 0 0;
  justify-self: center;
`

const ModalBest = styled.div`
  grid-column: 3 / -1;
  grid-row: 1 / 3;
  align-self: start;
  margin: 1.5rem 0 0 0;
  justify-self: center;
`

const ModalWeeklyBest = styled.div`
  grid-column: 1 / 3;
  grid-row: 3 / -1;
  align-self: center;
  margin: 1.5rem 0 0 0;
  justify-self: center;
`

const ModalOverallHighest = styled.div`
  grid-column: 3 / -1;
  grid-row: 3 / -1;
  align-self: center;
  margin: 1.5rem 3 0 0;
  justify-self: center;
`

const RistrettaModal = ({ recent, best, weeklyBest, highest }) => {
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
        contentLabel="Ristretta Modal"
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

export default RistrettaModal
