import React from 'react';
import { useState } from 'react';
import Header from './components/Header/Header.js';
import UploadForm from './components/UploadForm/UploadForm.js';
import ImageGrid from './components/ImageGrid/ImageGrid.js';
import Modal from './components/Modal/Modal.js';

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  return (
    <div className="App">
      <Header />
      {/* <UploadForm /> */}
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;