import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: ImageInputProps) {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);

    setImageURL(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <label>
      <input
        className={styles.input}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
      {imageURL ? (
        <img className={styles.uploadImage} src={imageURL} />
      ) : (
        <img className={styles.uploadImage} src="src/assets/uploadImage.png" />
      )}
    </label>
  );
}

export default ImageInput;
