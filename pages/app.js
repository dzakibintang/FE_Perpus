// pages/_app.js
import '../styles/globals.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Script from 'next/script';


  function MyApp({ Component, pageProps }) {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
