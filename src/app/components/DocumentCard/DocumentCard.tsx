import React, { useState } from 'react';
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
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {collapsed ? (
        <p className={styles.textCollapsed}>{text}</p>
      ) : (
        <p className={styles.text}>{text}</p>
      )}
      <button
        className={styles.button}
        onClick={() => setCollapsed(!collapsed)}
      >
        Read {collapsed ? 'more' : 'less'}
      </button>
    </div>
  );
}
