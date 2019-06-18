import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"

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
  grid-column: 4;
  grid-row: 3 / -1;
  align-self: center;
  margin: 1.5rem 0 0 0;
  justify-self: center;
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
  }

  return (
    <div style={modalStyles}>
      <button
        style={{
          color: "#00FF96",
          background: "#FF7D0A",
          borderRadius: `5rem`,
          border: "none",
          outline: "none",
          cursor: "pointer",
          fontSize: "2rem",
          width: "100%",
          padding: "1rem 1.5rem",
          margin: "1.5rem",
        }}
        onClick={() => setModalIsOpen(!modalIsOpen)}
      >
        See More
      </button>
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
        <button
          style={{
            gridRow: "-1",
            gridColumn: "3",
            justifySelf: "center",
            alignSelf: "center",
            padding: "1rem 1.5rem",
            cursor: "pointer",
            background: "#00FF96",
            color: "#FF7D0A",
            borderRadius: "5rem",
            width: "100%",
            border: "none",
            outline: "none",
          }}
          onClick={() => setModalIsOpen(!modalIsOpen)}
        >
          Close
        </button>
      </Modal>
    </div>
  )
}

export default MeerkatzModal
