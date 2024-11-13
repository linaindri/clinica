import Layout from '../componen/layout'
import styles from '../componen/stylemodule/container.module.css';
import Container from "../componen/container";

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Component Container</h1>
                <p>Ini adalah bagian dari container</p>
                <br />
                <Container size="kecil">
                    <h2>Small Container</h2>
                    <p>This is a small container.</p>
                </Container>
                <h6>Dokumentasi Code small</h6>
                <pre>
                    <code>
                        {`<Container size="small">
    <h2>Small Container</h2>
    <p>This is a small container.</p>
</Container>`}
                    </code>
                </pre>
                <br />
                <Container size="medium">
                    <h2>Medium Container</h2>
                    <p>This is a medium container.</p>
                </Container>
                <h6>Dokumentasi Code Medium</h6>
                <pre>
                    <code>
                        {`<Container size="medium">
    <h2>Small Container</h2>
    <p>This is a medium container.</p>
</Container>`}
                    </code>
                </pre>
                <br />
                <Container size="large">
                    <h2>Large Container</h2>
                    <p>This is a large container.</p>
                </Container>
                <br />
                <Container size="xlarge">
                    <h2>X-Large Container</h2>
                    <p>This is an extra-large container.</p>
                </Container>
                <br />
                <Container size="xxlarge">
                    <h2>XX-Large Container</h2>
                    <p>This is a double extra-large container.</p>
                </Container>
            </div>
        </Layout>
    );
}
export default Page;