import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config.js'

const useStorage = (file) => {

  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    //refrences
    const storageRef = projectStorage.ref(file.name)

    storageRef.put(file).on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage)
    }, (err) => {
      setError(err);
    }, async () => {
      const downloadedUrl = await storageRef.getDownloadUrl();
      setUrl(downloadedUrl);
    })

  }, [file])

  return { progress, url, error }
}

export default useStorage;