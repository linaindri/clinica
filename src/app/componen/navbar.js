// app/componen/Navbarnya header.js
import Link from 'next/link';
import styles from '../componen/stylemodule/cardNavbar.module.css'; // Gaya untuk Navbar
import Container from './container';

const Navbar = () => {
    return (
        <><div>
            <nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <Link href="/" className={styles.navbar__brand}>
                        Clinica Navbar 1
                    </Link>
                    <div className={styles.navbar__buttons}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/layanan">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                                Layanan
                            </button>
                        </Link>
                        <Link href="/info/blog">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_login}`}>
                                Blog
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                                Kontak
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        <br/>
        <div className={styles.container}>
                <Container size="xlarge">
                    <p>Component Navbar menampung semua syntax coding clinica navbar 1 dengan nama class css nya styles.navbar</p>
                    <pre>
                        <code>
                            {`
                            <div>
                                <nav className={styles.navbar}>
                                    <div className={styles.navbar__container}>
                                        <Link href="/" className={styles.navbar__brand}>
                                            Clinica Navbar 1
                                        </Link>
                                        <div className={styles.navbar__buttons}>
                                            <Link href="/info/home">
                                                <button className={'${styles.navbar__button} ${styles.navbar__button_primary}'}>
                                                    Home
                                                </button>
                            `}
                        </code>
                    </pre>
                </Container>
        </div>
        <br/>
        <div>
            <nav className={styles.navbar2}>
                <div className={styles.navbar__container2}>
                    <Link href="/" className={styles.navbar__brand2}>
                        Clinica Navbar 2
                    </Link>
                    <div className={styles.navbar__buttons2}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button2} ${styles.navbar__button2_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/layanan">
                            <button className={`${styles.navbar__button2} ${styles.navbar__button2_secondary}`}>
                                Layanan
                            </button>
                        </Link>
                        <Link href="/info/blog">
                            <button className={`${styles.navbar__button2} ${styles.navbar__button2_login}`}>
                                Blog
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button2} ${styles.navbar__button2_danger}`}>
                                Kontak
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        <br/>
        <div className={styles.container}>
            <Container size="xlarge">
                <p>Component Navbar juga menmapung syntax untuk clinica navbar 2 dengan penamaan class yang berbeda yaitu styles.navbar2 dan juga dengan gaya visual yang berbeda dnegan clinica navbar 1 </p>
                <pre>
                    <code>
                        {`
                        <div>
                            <nav className={styles.navbar2}>
                                <div className={styles.navbar__container2}>
                                    <Link href="/" className={styles.navbar__brand2}>
                                        Clinica
                                    </Link>
                                    <div className={styles.navbar__buttons2}>
                                        <Link href="/info/home">
                                            <button className={\`${styles.navbar__button2} ${styles.navbar__button2_primary}\`}>
                                                Home
                                            </button>
                        `}
                    </code>
                </pre>
            </Container>
        </div></>

    );
};

export default Navbar;
