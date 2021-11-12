import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from '../../utils/usePostDocument';

type AddDocumentFormProps = {
  text: string;
  image: File;
};

export default function AddDocumentForm({ text, image }: AddDocumentFormProps) {
  const [title, setTitle] = useState('');
  const { saveDisabled, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
      image,
    };
    await postDocument(document);
  };
  return (
    <form className={styles.saveForm} onSubmit={handleSubmit}>
      <input
        className={styles.saveInput}
        placeholder="document title"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <button disabled={saveDisabled} className={styles.saveBtn} type="submit">
        Save
      </button>
    </form>
  );
}
