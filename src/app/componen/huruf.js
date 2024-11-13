import React from 'react';
import styles from '../componen/stylemodule/huruf.module.css';
import Container from './container';

export default function Huruf() {
  return (
    <div>
      <h1 className={styles.judulUtama}>Kesehatan untuk Semua - Judul Utama</h1>
      <div className={styles.container}>
        <Container size="xlarge">
          <p>
            ukuran font <pre><code>{`font-size: 32px; font-weight: 600;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding Judul dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                <h1 className={styles.judulUtama}>Kesehatan untuk Semua - Judul Utama</h1>
              `}
            </code>
          </pre>
        </Container>
      </div>
      <br />
      <h2 className={styles.subJudul}>Tips Kesehatan Terbaru - Sub Judul</h2>
      <div className={styles.container}>
        <Container size="xlarge">
        <p>
            ukuran font <pre><code>{`font-size: 24px; font-weight: 500;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding Sub Judul dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                <h2 className={styles.subJudul}>Tips Kesehatan Terbaru - Sub Judul</h2>
              `}
            </code>
          </pre>
        </Container>
      </div>
      <br />
      <p className={styles.teksDeskripsi}>
        Menjaga kesehatan adalah hal yang penting bagi semua orang. Dengan mengikuti tips-tips kesehatan
        dari para ahli, Anda dapat meningkatkan kualitas hidup dan menjaga tubuh tetap bugar. - Deskripsi
      </p>
      <div className={styles.container}>
        <Container size="xlarge">
        <p>
            ukuran font <pre><code>{`font-size: 16px;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding Deskripsi dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                      <p className={styles.teksDeskripsi}>
                        Menjaga kesehatan adalah hal yang penting bagi semua orang. Dengan mengikuti tips-tips kesehatan
                        dari para ahli, Anda dapat meningkatkan kualitas hidup dan menjaga tubuh tetap bugar. - Deskripsi
                      </p>
              `}
            </code>
          </pre>
        </Container>
      </div>
      <br />
      <p className={styles.poinPenting}>
        Penting: Selalu konsultasikan dengan profesional kesehatan sebelum memulai pengobatan baru. - Informasi Penting, Peringatan
      </p>
      <div className={styles.container}>
        <Container size="xlarge">
        <p>
            ukuran font <pre><code>{`font-size: 18px; font-weight: bold;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding poinPenting dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                      <p className={styles.poinPenting}>
                        Penting: Selalu konsultasikan dengan profesional kesehatan sebelum memulai pengobatan baru. - Informasi Penting, Peringatan
                      </p>
              `}
            </code>
          </pre>
        </Container>
      </div>
      <br />
      <label className={styles.labelInput}>Nama Lengkap : </label>
      {/* <input type="text" /> */}
      <div className={styles.container}>
        <Container size="xlarge">
        <p>
            ukuran font <pre><code>{`font-size: 14px; font-weight: normal;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding labelInput dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                <label className={styles.labelInput}>Nama Lengkap</label>
              `}
            </code>
          </pre>
        </Container>
      </div>
      <br />
      <p className={styles.teksRingan}>
        Catatan: Informasi ini hanya akan digunakan untuk kepentingan konsultasi. - Catatan Kecil
      </p>
      <div className={styles.container}>
        <Container size="xlarge">
        <p>
            ukuran font <pre><code>{`font-size: 12px; font-weight: normal;`}</code></pre>
          </p>
          <p>
            Component huruf menampung semua syntax coding teksRingan dengan huruf.module.css sebagai file css
          </p>
          <pre>
            <code>
              {`
                      <p className={styles.teksRingan}>
                        Catatan: Informasi ini hanya akan digunakan untuk kepentingan konsultasi. - Catatan Kecil
                      </p>
              `}
            </code>
          </pre>
        </Container>
      </div>
    </div>
  );
}
