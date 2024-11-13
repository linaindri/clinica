"use client";

import React, { useState } from 'react';
import styles from '../componen/stylemodule/formL.module.css';
import Layout from './layout';

const FormL = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    medicalHistory: '',
    allergies: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    profilePhoto: null,
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePhoto: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <Layout>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.container}>Formulir Riwayat Medis</h2>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="fullName">Nama Lengkap:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="dob">Tanggal Lahir:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="gender">Jenis Kelamin:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Pilih...</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="address">Alamat:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Nomor Telepon:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="medicalHistory">Riwayat Penyakit:</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="allergies">Alergi:</label>
          <textarea
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="emergencyContactName">Nama Kontak Darurat:</label>
          <input
            type="text"
            id="emergencyContactName"
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="emergencyContactPhone">Nomor Kontak Darurat:</label>
          <input
            type="tel"
            id="emergencyContactPhone"
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="profilePhoto">Foto Profil:</label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="notes">Catatan Tambahan:</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>Daftar</button>
      </form>
    </Layout>
  );
};

export default FormL;
