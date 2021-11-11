import React from 'react';
import styles from './searchBar.module.css';

export default function searchBar() {
  return <input className={styles.input} type="text" placeholder="Search..." />;
}
