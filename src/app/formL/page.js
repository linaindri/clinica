import React from 'react';
import FormL from '../componen/formL';
import styles from '../componen/stylemodule/container.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Pendaftaran Pasien</h1>
      <FormL />
    </div>
  );
};

export default Page;
