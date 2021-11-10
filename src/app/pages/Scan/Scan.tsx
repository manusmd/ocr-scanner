import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  return (
    <div className={styles.container}>
      <ImageInput onUpload={setImageURL} />
      <button className={styles.scanBtn} disabled={imageURL === null}>
        Scan
      </button>
    </div>
  );
}
export default Scan;
