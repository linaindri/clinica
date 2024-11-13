// page.js
import React from "react";
import Notice from "../componen/notice.js";
import Layout from "../componen/layout.js";
import Container from "../componen/container.js";
import styles from '../componen/stylemodule/notice.module.css';

function Page() {
  return (
    <Layout>
      <div>
        <h1>Selamat Datang di Aplikasi Kesehatan</h1>
        <Notice type="info" message="Pastikan Anda mengonsumsi cukup air setiap hari untuk menjaga kesehatan tubuh." />
        <div className={styles.container}> {/* Use the imported styles */}
          <Container size="xlarge">
            <p>ukuran icon <pre><code>{`font-size: 1.5em;`}</code></pre></p>
            <p>
              ukuran message <pre><code>{`font-size: 16px;`}</code></pre>
            </p>
            <p>Component notice menampung syntax notice informasi dengan css notice.module.css</p>
            <pre>
              <code>
                {`
                  <Notice type="info" message="Pastikan Anda mengonsumsi cukup air setiap hari untuk menjaga kesehatan tubuh." />

                  return (
                    <div className={'${styles.notice} ${noticeClass}'}>   // Ensure noticeClass is defined
                      <span className={styles.icon}>
                        {type === "info" && "ℹ️"}
                      </span>
                      <p className={styles.message}>{message}</p>
                    </div>
                  );
                `}
              </code>
            </pre>
          </Container>
        </div>
        <Notice type="warning" message="Pastikan untuk tidak melewatkan jadwal pemeriksaan kesehatan rutin." />
        <Notice type="danger" message="Jangan konsumsi obat tanpa resep dokter. Ini dapat berbahaya bagi kesehatan." />
      </div>
    </Layout>
  );
}

export default Page;
