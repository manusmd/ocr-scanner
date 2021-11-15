import React, { useEffect, useState } from 'react';
import styles from './SearchBar.module.css';

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log(value);
      onSearch(value);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);
  return (
    <input
      value={value}
      className={styles.input}
      onChange={(event) => setValue(event.target.value)}
      type="text"
      placeholder="Search..."
    />
  );
}
