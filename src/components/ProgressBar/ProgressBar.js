import './ProgressBar.css'
import useStorage from '../../hooks/useStorage.js';
import { useEffect } from 'react'
import React from 'react'

const ProgressBar = ({ file, setFile }) => {
  
  const { url, progress } = useStorage(file)
  
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])


  return (
    <div 
      className="progress-bar"
      stlye={{ width: progress + '%'}}
    >
    </div>
  )
}

export default ProgressBar