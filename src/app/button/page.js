// import Layout from '../componen/layout'
// import styles from '../componen/stylemodule/container.module.css';
// import Button from '../componen/button';
// import Container from '../componen/container';

// const Page = () => {
//     return (
//         <Layout>
//             <div className={styles.container}>
//                 <h1>Clinica</h1>
//                 <Button state="login">Login</Button>
//                 <br/>
//                 <div className={styles.container}>
//                 <Container size="xlarge">
//                     <p>Component button menampung syntax coding button login dengan class state="login"</p>
//                     <pre>
//                         <code>
//                             {`<Button state="login">Login</Button>`}
//                         </code>
//                     </pre>
//                 </Container>
//                 </div>
//                 <Button state="call">Hubungi Dokter</Button>
//                 <br/>
//                 <Container size="xlarge">
//                     <p>Component button menampung syntax coding button call to action dengan class state="call"</p>
//                     <pre>
//                         <code>
//                             {`<Button state="call">Call to action</Button>`}
//                         </code>
//                     </pre>
//                 </Container>
//                 <br/>
//                 <Button state="danger">Detail</Button>
//                 <br/>
//                 <Container size="xlarge">
//                     <p>Component button menampung syntax coding button detail dengan class state="danger"</p>
//                     <pre>
//                         <code>
//                             {`<Button state="danger">Detail</Button>`}
//                         </code>
//                     </pre>
//                 </Container>
//                 <br/>
//                 <Button state="register">Register</Button>
//                 <br/>
//                 <Container size="xlarge">
//                     <p>component button menampung syntax coding register dengan class state="register"</p>
//                     <pre>
//                         <code>
//                             {`<Button state="register">Register</Button>`}
//                         </code>
//                     </pre>
//                 </Container>
//                 <br/>
//                 {/* <Button state="krj">Tambah Ke Keranjang</Button>
//                 <br/>
//                 <Container size="xlarge">
//                     <p>Component button menampung syntax coding button tambah ke keranjang dengan class state="krj"</p>
//                     <pre>
//                         <code>
//                             {`<Button state="krj">Tambah Ke Keranjang</Button>`}
//                         </code>
//                     </pre>
//                 </Container> */}
//             </div>
//         </Layout>
//     );
// }
// export default Page;

import Layout from '../componen/layout';
import styles from '../componen/stylemodule/container.module.css';
import Button from '../componen/button';
import Container from '../componen/container';

const Page = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>Clinica</h1>

                {/* Button for Adding to Cart */}
                <Button size="large" color="primary" shape="coba">Tambahkan ke Keranjang</Button>
                <Container size="xlarge">
                    <p>Button for adding items to cart, size large, blue for trust and action, rounded for approachability.</p>
                </Container>

                {/* Button for Registering */}
                <Button size="medium" color="success" shape="rounded">Register</Button>
                <Container size="xlarge">
                    <p>Button for registering an account, medium size, green for positivity, rounded for welcoming appearance.</p>
                </Container>

                {/* Button for Viewing Details */}
                <Button size="small" color="default" shape="square">Detail</Button>
                <Container size="xlarge">
                    <p>Button for viewing details, small size to keep subtle, gray color for neutrality, square shape for clean design.</p>
                </Container>

                {/* Button for Contacting a Doctor */}
                <Button size="large" color="danger" shape="rounded">Hubungi Dokter</Button>
                <Container size="xlarge">
                    <p>Button for contacting a doctor, large size to be prominent, red for urgency, rounded for approachability.</p>
                </Container>

                {/* Button for Logging In */}
                <Button size="medium" color="success" shape="rounded">Login</Button>
                <Container size="xlarge">
                    <p>Button for logging in, medium size for easy visibility, blue for trust, rounded for a friendly appearance.</p>
                </Container>
            </div>
        </Layout>
    );
};

export default Page;
