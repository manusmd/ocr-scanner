import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

function ImageInput() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('hallo');
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImageURL(imageURL);
    console.log(file);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.input}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
      <img className={styles.uploadImage} src="src/assets/uploadImage.png" />
      {imageURL && <img src={imageURL} alt="" />}
    </label>
  );
}

export default ImageInput;
