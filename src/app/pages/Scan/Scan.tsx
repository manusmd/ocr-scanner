import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';

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
                  if (message.status === 'loading tesseract core') {
                    setProgressValue(10);
                  } else if (message.status === 'initializing tesseract') {
                    setProgressValue(20);
                  } else if (
                    message.status === 'loading language traineddata'
                  ) {
                    setProgressValue(30);
                  } else if (message.status === 'loaded language traineddata') {
                    setProgressValue(40);
                  } else if (message.status === 'initializing api') {
                    setProgressValue(50);
                  } else if (message.status === 'initialized api') {
                    setProgressValue(60);
                  } else if (
                    message.status === 'recognizing text' &&
                    message.progress !== 1
                  ) {
                    setProgressValue(70);
                  } else if (
                    message.status === 'recognizing text' &&
                    message.progress === 1
                  ) {
                    setProgressValue(100);
                  }
                },
              })
                .then((result) => setImageText(result.data.text))
                .then(() => setScanActive(false));
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
