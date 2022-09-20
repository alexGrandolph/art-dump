import React from 'react';
import Header from './components/Header/Header.js';
import UploadForm from './components/UploadForm/UploadForm.js';
import ImageGrid from './components/ImageGrid/ImageGrid.js';

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;