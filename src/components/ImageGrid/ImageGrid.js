import './ImageGrid.css';
import useFirestore from '../../hooks/useFirestore.js';

import React from 'react'

  

const ImageGrid = () => {

  const { docs } = useFirestore('images');
  console.log(docs)
  return (
    <div className="img-grid">

      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}>
          <img className="image" src={doc.url} alt="picture"  />
        </div>
      ))}

    </div>
  )
}

export default ImageGrid