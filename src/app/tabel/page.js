// Page.js
import React from 'react';
import styles from '../componen/stylemodule/container.module.css';
import Table from '../componen/tabel';
import Layout from '../componen/layout';

const Page = () => {
    const pasienData = [
      { id: 1, nama: 'Andi Wijaya', usia: 34, jenisKelamin: 'Pria', noTelepon: '08123456789', alamat: 'Jakarta' },
      { id: 2, nama: 'Siti Aisyah', usia: 29, jenisKelamin: 'Wanita', noTelepon: '08234567890', alamat: 'Bandung' },
      { id: 3, nama: 'Budi Santoso', usia: 45, jenisKelamin: 'Pria', noTelepon: '08345678901', alamat: 'Surabaya' }
    ];
  
    const rekamMedisData = [
      { id: 1, nama: 'Andi Wijaya', tanggalPemeriksaan: '01-11-2024', diagnosis: 'Hipertensi', tindakan: 'Pemberian obat', dokter: 'Dr. Suryo' },
      { id: 2, nama: 'Siti Aisyah', tanggalPemeriksaan: '03-11-2024', diagnosis: 'Asma', tindakan: 'Nebulisasi', dokter: 'Dr. Lestari' },
      { id: 3, nama: 'Budi Santoso', tanggalPemeriksaan: '02-11-2024', diagnosis: 'Diabetes Melitus Tipe 2', tindakan: 'Edukasi pola makan', dokter: 'Dr. Agus' }
    ];
  
    const jadwalKonsultasiData = [
      { id: 1, nama: 'Andi Wijaya', tanggalKonsultasi: '05-11-2024', jam: '10:00', dokter: 'Dr. Suryo', status: 'Dijadwalkan' },
      { id: 2, nama: 'Siti Aisyah', tanggalKonsultasi: '06-11-2024', jam: '13:30', dokter: 'Dr. Lestari', status: 'Dibatalkan' },
      { id: 3, nama: 'Budi Santoso', tanggalKonsultasi: '07-11-2024', jam: '09:00', dokter: 'Dr. Agus', status: 'Selesai' }
    ];
  
    return (
        <Layout>
            <div className={styles.page}>
                <h1 className={styles.title}>Data Kesehatan</h1>
                <h2 className={styles.subtitle}>Tabel Pasien</h2>
                <Table data={pasienData} columns={['No', 'Nama Pasien', 'Usia', 'Jenis Kelamin', 'No. Telepon', 'Alamat']} />
                
                <h2 className={styles.subtitle}>Tabel Rekam Medis</h2>
                <Table data={rekamMedisData} columns={['No', 'Nama Pasien', 'Tanggal Pemeriksaan', 'Diagnosis', 'Tindakan', 'Dokter']} />
                
                <h2 className={styles.subtitle}>Tabel Jadwal Konsultasi</h2>
                <Table data={jadwalKonsultasiData} columns={['No', 'Nama Pasien', 'Tanggal Konsultasi', 'Jam', 'Dokter', 'Status']} />
            </div>
        </Layout>
    );
  };
  
export default Page;
