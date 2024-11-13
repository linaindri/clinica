// app/componen/Footer.js
import styles from '../componen/stylemodule/cardNavbar.module.css'; // Import styles
import Container from './container';

const Footer = () => {
    return (
        <><footer className={styles.footer} style={{ backgroundColor: '#469C8F', color: 'white', padding: '40px 0' }}>
            {/* Top Section */}
            <div className={styles.topSection}>
                <p>Clinica ingin menjadi sumber informasi Anda dalam membuat keputusan kesehatan dan agar Anda bisa selalu hidup sehat dan bahagia.</p>
                <div className={styles.socialMedia}>
                    <a href="#" aria-label="Instagram"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
                    <a href="#" aria-label="Facebook"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                    <a href="#" aria-label="TikTok"><img src="/path/to/tiktok-icon.png" alt="TikTok" /></a>
                </div>
            </div>

            {/* Links Section */}
            <div className={styles.linkSection}>
                <div className={styles.column}>
                    <h4>Kategori</h4>
                    <a href="#">Cek Kesehatan</a>
                    <a href="#">Booking Dokter</a>
                    <a href="#">Komunitas</a>
                </div>
                <div className={styles.column}>
                    <h4>Informasi</h4>
                    <a href="#">Ketentuan Pengguna</a>
                    <a href="#">Kebijakan Privasi</a>
                    <a href="#">Kebijakan Editorial dan Koreksi</a>
                    <a href="#">Kebijakan Iklan dan Sponsor</a>
                    <a href="#">Panduan Komunitas</a>
                    <a href="#">Hello Sehat dan Kemenkes</a>
                </div>
                <div className={styles.column}>
                    <h4>Clinica</h4>
                    <a href="#">Tentang Kami</a>
                    <a href="#">Profil Manajemen</a>
                    <a href="#">Karier</a>
                    <a href="#">Kontak Kami</a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection} style={{ marginTop: '20px', textAlign: 'center' }}>
                <p>© {new Date().getFullYear()} Clinica. Hak Cipta Dilindungi. Hello Sehat tidak menawarkan saran medis, diagnosis, atau perawatan.</p>
            </div>
        </footer><br/><div className={styles.container}>
                <Container size="xlarge">
                    <p>Component Footer menampung beberapa syntax</p>
                    <p>1. Top Section menyediakan informasi singkat tentang tujuan Clinica, yaitu sebagai sumber informasi kesehatan dan juga ikon media sosial (Instagram, Facebook, TikTok)</p>
                    <pre>
                        <code>
                            {`
                            <div className={styles.topSection}>
                                <p>Clinica ingin menjadi sumber informasi Anda dalam membuat keputusan kesehatan dan agar Anda bisa selalu hidup sehat dan bahagia.</p>
                                <div className={styles.socialMedia}>
                                    <a href="#" aria-label="Instagram"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
                                    <a href="#" aria-label="Facebook"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                                    <a href="#" aria-label="TikTok"><img src="/path/to/tiktok-icon.png" alt="TikTok" /></a>
                                </div>
                            </div>
                            `}
                        </code>
                    </pre>
                    <p>2. Link Section dengan terdiri dari 3 kolom Kategori, Informasi, Clinica serta beberapa tautan yang relevan dengan class styles.linkSection</p>
                    <pre>
                        <code>
                            {`            
                            <div className={styles.linkSection}>
                                <div className={styles.column}>
                                    <h4>Kategori</h4>
                                    <a href="#">Cek Kesehatan</a>
                                    <a href="#">Booking Dokter</a>
                                    <a href="#">Komunitas</a>
                                </div>
                            `}
                        </code>
                    </pre>
                    <p>3. Bottom Section menampilkan pernyataan hak cipta dengan tahun saat ini dengan nama class nya styles.bottomSection</p>
                    <pre>
                        <code>
                            {`            
                            <div className={styles.bottomSection} style={{ marginTop: '20px', textAlign: 'center' }}>
                                <p>© {new Date().getFullYear()} Clinica. Hak Cipta Dilindungi. Hello Sehat tidak menawarkan saran medis, diagnosis, atau perawatan.</p>
                            </div>
                            `}
                        </code>
                    </pre>
                </Container>
            </div></>
    );
};

export default Footer;
