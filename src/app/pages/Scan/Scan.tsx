import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  return (
    <div className={styles.container}>
      <ImageInput onUpload={setImageURL} />
      <div className={styles.buttons}>
        <button className={styles.scanBtn} disabled={imageURL === null}>
          Scan
        </button>
        <button className={styles.skipBtn}>Skip</button>
      </div>
    </div>
  );
}
export default Scan;
