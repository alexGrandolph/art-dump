import './UploadForm.css'
import { useState } from 'react'
import ProgressBar from '../ProgressBar/ProgressBar.js'

import React from 'react'


const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    if (selected && allowedFileTypes.includes(selected.type)) {
      setFile(selected);
      setError('')
    } else {
      setFile(null);
      setError('Please select an image file (.png, .jpeg, .jpg)')
    }

  }
  
  return (
    <div className="upload-form-container"> 

      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          { error && <div className="error">{ error }</div> }
          { file && <div> { file.name } </div> }
          { file && <ProgressBar /> }
        </div>
      </form>


    </div>
  )
}

export default UploadForm