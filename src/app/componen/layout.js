// components/Layout.js
import styles from './stylemodule/layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav>
                    <ul>
                        <li>Component</li>
                        <li><a href="navbar">Navbar</a></li>
                        <li><a href="button">Button</a></li>
                        <li><a href="image">Image</a></li>
                        <li><a href="home">Home</a></li>
                        <li><a href="footer">Footer</a></li>
                        <li><a href="tabel">Tabel</a></li>
                        <li><a href="formL">Form Lengkap</a></li>
                        <li><a href="formK">Form Komponen</a></li>
                        <li><a href="card">Card</a></li>
                        <li><a href="notice">Notice</a></li>
                        <li><a href="huruf">Huruf</a></li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
