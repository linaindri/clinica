import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Footer from '../componen/footer';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <br/>
                <h1>Footer</h1>
                <Footer />
            </div>
        </Layout>
    );
}
export default Page;