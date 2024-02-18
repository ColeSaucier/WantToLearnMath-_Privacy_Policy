import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div style={{ 
          fontFamily: 'Arial', 
          fontSize: '14px', 
          color: '#595959',
          paddingTop: '16px',
        }}>
          <ul>
            <li>List item</li>
            <li>List item</li>
          </ul>
          <ol>
            <li>Ordered list item</li>
            <li>Ordered list item</li>
          </ol>
        </div>
        <div style={{ 
          fontFamily: 'Arial', 
          fontSize: '14px', 
          color: '#595959',
          paddingTop: '16px',
        }}>
          This privacy policy was created using Termly's <a style={{ color: '#3030F1' }} href="https://termly.io/products/privacy-policy-generator/">Privacy Policy Generator</a>.
        </div>
      </main>

      <Footer />
    </div>
  );
}