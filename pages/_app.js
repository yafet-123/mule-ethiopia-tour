import '@/styles/globals.css';
import { Inter, Fraunces } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} font-sans text-ink antialiased`}>
      <Navbar />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}