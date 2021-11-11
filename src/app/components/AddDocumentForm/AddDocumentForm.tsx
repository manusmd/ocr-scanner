import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

export default function AddDocumentForm({ text }: AddDocumentFormProps) {
  const [title, setTitle] = useState('');
  const [saveDisabled, setSaveDisabled] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    fetch('http://localhost:1337/documents', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setSaveDisabled(true);
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
