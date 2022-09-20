import './UploadForm.css'
import { useState } from 'react'

import React from 'react'


const UploadForm = () => {
  const [file, setFile] = useState(null)
  
  const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      
    }

  }
  
  return (
    <div className="upload-form-container"> 

      <form>
        <input type="file" onChange={changeHandler} />
      </form>


    </div>
  )
}

export default UploadForm