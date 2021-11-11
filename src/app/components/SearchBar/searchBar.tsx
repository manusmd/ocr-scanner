import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar() {
  return <input className={styles.input} type="text" placeholder="Search..." />;
}
