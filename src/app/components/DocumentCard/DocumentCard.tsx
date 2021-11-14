import React from 'react';
import styles from './DocumentCard.module.css';

export type addDocumentCardProps = {
  id?: number;
  title: string;
  text: string;
};

export default function AddDocumentCard({
  title,
}: addDocumentCardProps): JSX.Element {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
}
