import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // console.log('FIRED')
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          // console.log(doc)
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);
  // }, []);

  return { docs };
}

export default useFirestore;










// import { useState, useEffect } from 'react'
// import { projectFirestore } from '../firebase/config.js'


// const useFirestore = (collection) => {

//   const [docs, setDocs] = useState([]);

//   useEffect(() =>{
//     const unsub = projectFirestore.collection(collection)
//       .orderBy('createAt', 'desc')
//       .onSnapshot((snap) => {
//         let documents = [];
//         snap.forEach(doc => {
//           documents.push({...doc.data(), id: doc.id})
//         });
//         setDocs(documents);
//       });
//     return () => unsub();

//   }, [collection])

//   return { docs };
// }

// export default useFirestore;
