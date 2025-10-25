import '../styles/globals.css';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export default function App({ Component, pageProps }) {
  return (
    <div className={montserrat.variable}>
      <Component {...pageProps} />
    </div>
  );
}
