import './ImageGrid.css';
import useFirestore from '../../hooks/useFirestore.js';
import { motion } from 'framer-motion'
  

const ImageGrid = ({ setSelectedImage }) => {

  const { docs } = useFirestore('images');
  const constraintsRef = useRef(null);

  return (
    <div className="img-grid">

      { docs && docs.map(doc => (
        <motion.div 
          className="img-wrap" 
          key={doc.id}
          layout
          onClick={() => setSelectedImage(doc.url)}
          whileHover={{opacity: 1}}
        >
          <motion.img 
            className="image" 
            src={doc.url} 
            alt="picture"
            inital={{ opacity: 0}}  
            animate={{ opacity: 1 }}
            transition={{ delay: 5 }}
         
          />
        </motion.div>
      
      ))}

    </div>
  )
}

export default ImageGrid