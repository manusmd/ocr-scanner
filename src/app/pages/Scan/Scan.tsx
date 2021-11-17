import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';
import { Link } from 'react-router-dom';

function Scan() {
  const [imageURL, setImageURL] = useState<string>('');
  const { text, progress, recognize, scanActive } = useRecognizeText();

  return (
    <div className={styles.container}>
      {text ? (
        <p className={styles.scanTxt}>{text}</p>
      ) : (
        <ImageInput onUpload={setImageURL} />
      )}
      <div className={styles.buttons}>
        {scanActive && progress && (
          <Progress value={progress.progress * 100} status={progress.status} />
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
        <Link className={styles.skipBtn} to="/documents">
          Skip
        </Link>
      </div>
    </div>
  );
}
export default Scan;
