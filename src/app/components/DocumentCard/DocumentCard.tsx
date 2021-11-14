import React from 'react';
import styles from './DocumentCard.module.css';

type addDocumentCardProps = {
  title: string;
};

export default function addDocumentCard({ title }: addDocumentCardProps) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
    </div>
  );
}
