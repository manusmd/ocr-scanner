import React from 'react';
import styles from './DocumentCard.module.css';

export type addDocumentCardProps = {
  id?: number;
  title: string;
  text: string;
};

export default function AddDocumentCard({
  title,
  text,
}: addDocumentCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
