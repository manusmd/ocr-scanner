import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [imageText, setImageText] = useState<string | null>(null);
  const [progressStatus, setProgressStatus] = useState<string>('');
  const [progressValue, setProgressValue] = useState<number>(0);
  const [scanActive, setScanActive] = useState<boolean>(false);

  console.log(progressStatus, progressValue);
  return (
    <div className={styles.container}>
      {imageText ? <p>{imageText}</p> : <ImageInput onUpload={setImageURL} />}
      <div className={styles.buttons}>
        {scanActive ? (
          <Progress value={progressValue} status={progressStatus} />
        ) : (
          <p></p>
        )}
        {imageText ? (
          <AddDocumentForm text={imageText} />
        ) : (
          <button
            className={styles.scanBtn}
            disabled={imageURL === null}
            onClick={() => {
              if (imageURL) {
                setScanActive(true);
                Tesseract.recognize(imageURL, 'eng', {
                  logger: (message) => {
                    console.log(message);
                    setProgressStatus(message.status);
                    setProgressValue(message.progress * 100);
                  },
                })
                  .then((result) => setImageText(result.data.text))
                  .then(() => setScanActive(false));
              }
            }}
          >
            Scan
          </button>
        )}
        <button className={styles.skipBtn}>Skip</button>
      </div>
    </div>
  );
}
export default Scan;
