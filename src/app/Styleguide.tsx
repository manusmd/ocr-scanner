import React from 'react';
import styles from './Styleguide.module.css';

function Styleguide() {
  return (
    <div className={styles.container}>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h1>Colors</h1>
      <div
        className={styles.colors}
        style={{
          backgroundColor: 'var(--primary-color)',
          height: '3rem',
          width: '3rem',
          borderRadius: '50%',
        }}
      />
      <h1>Document selection</h1>
      <div
        style={{
          display: 'grid',
          height: '2rem',
          borderRadius: '0.5rem',
          placeItems: 'center',
          textAlign: 'center',
          backgroundColor: 'var(--primary-bg-color',
        }}
      >
        <h3>Document text</h3>
      </div>
    </div>
  );
}

export default Styleguide;
