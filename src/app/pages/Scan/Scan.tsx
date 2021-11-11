import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan() {
  const [imageURL, setImageURL] = useState<string>('');
  const { text, progress, recognize, scanActive } = useRecognizeText();

  return (
    <div className={styles.container}>
      {text ? <p>{text}</p> : <ImageInput onUpload={setImageURL} />}
      <div className={styles.buttons}>
        {scanActive && progress ? (
          <Progress value={progress.progress * 100} status={progress.status} />
        ) : (
          <p></p>
        )}
        {text ? (
          <AddDocumentForm text={text} />
        ) : (
          <button
            className={styles.scanBtn}
            disabled={imageURL === null}
            onClick={() => {
              if (imageURL) {
                recognize(imageURL);
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
