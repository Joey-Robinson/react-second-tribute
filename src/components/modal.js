import React, { useState } from "react"
import Modal from "react-modal"

const WowModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const modalStyles = {
    alignSelf: "center",
    gridColumn: "2",
    gridRow: "3",
    justifySelf: "center",
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
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        contentLabel="Example Modal"
      >
        <button onClick={() => setModalIsOpen(!modalIsOpen)}>Close</button>
        <div>I am a modal</div>
      </Modal>
    </div>
  )
}

export default WowModal
