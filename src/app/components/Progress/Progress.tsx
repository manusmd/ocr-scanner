import React from 'react';
import styles from './Progress.module.css';

export type ProgressProps = {
  value: number;
  status: string;
};

function Progress({ value, status }: ProgressProps): JSX.Element {
  return (
    <>
      <div>
        <progress className={styles.progressBar} value={value} max="100" />
      </div>
      <p className={styles.progress}>{status}</p>
    </>
  );
}
export default Progress;
