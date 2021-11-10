import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [imageText, setImageText] = useState<string | null>(null);
  return (
    <div className={styles.container}>
      {imageText ? <p>{imageText}</p> : <ImageInput onUpload={setImageURL} />}
      <div className={styles.buttons}>
        <button
          className={styles.scanBtn}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              Tesseract.recognize(imageURL, 'eng', {
                logger: (message) => console.log(message.progress),
              }).then((result) => setImageText(result.data.text));
            }
          }}
        >
          Scan
        </button>
        <button className={styles.skipBtn}>Skip</button>
      </div>
    </div>
  );
}
export default Scan;
