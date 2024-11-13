// formK.js
"use client"; // Add this line to specify a client component

import React, { useState } from 'react';
import styles from '../componen/stylemodule/formK.module.css';
import Layout from './layout';

const FormK = () => {
  const [formData, setFormData] = useState({
    alamat: '',
    kota: '',
    provinsi: '',
    kodePos: '',
    telepon: '',
    email: '',
    riwayatPenyakit: '',
    alergi: '',
    obat: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Tambahkan logika pengiriman data di sini
  };

  return (
    <Layout>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2>Form Alamat</h2>
        <div className={styles.formGroup}>
            <label>Alamat Jalan:</label>
            <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Kota:</label>
            <input
            type="text"
            name="kota"
            value={formData.kota}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Provinsi:</label>
            <input
            type="text"
            name="provinsi"
            value={formData.provinsi}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Kode Pos:</label>
            <input
            type="text"
            name="kodePos"
            value={formData.kodePos}
            onChange={handleChange}
            />
        </div>

        <h2>Form Kontak</h2>
        <div className={styles.formGroup}>
            <label>Nomor Telepon:</label>
            <input
            type="text"
            name="telepon"
            value={formData.telepon}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Email:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>

        <h2>Form Riwayat Kesehatan</h2>
        <div className={styles.formGroup}>
            <label>Riwayat Penyakit:</label>
            <textarea
            name="riwayatPenyakit"
            value={formData.riwayatPenyakit}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Alergi:</label>
            <input
            type="text"
            name="alergi"
            value={formData.alergi}
            onChange={handleChange}
            />
        </div>
        <div className={styles.formGroup}>
            <label>Obat yang Sedang Diterima:</label>
            <input
            type="text"
            name="obat"
            value={formData.obat}
            onChange={handleChange}
            />
        </div>

        <button type="submit" className={styles.submitButton}>
            Submit
        </button>
        </form>
    </Layout>
  );
};

export default FormK;
