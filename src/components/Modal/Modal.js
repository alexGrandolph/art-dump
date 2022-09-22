import './Modal.css'


import React from 'react'

const Modal = ({ selectedImage, setSelectedImage }) => {
  
  function handleClick(event) {
    if(event.target.classList.contains('backdrop')){
      setSelectedImage(null)
    }
    
  }
  
  return (
    <div 
      className="backdrop"
      onClick={handleClick}
    >
      <img src={selectedImage} alt="modal/close up of selected picture"/>
    </div>
  )
}

export default Modal