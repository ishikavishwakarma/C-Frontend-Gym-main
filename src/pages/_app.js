import CustomCursor from '@/components/Courser';
import HomeLoader from '@/components/HomeLoader';
import LoadingPage from '@/components/LoadingPage';
import ScrollToTopButton from '@/components/ScrollButton';
import LoadingAnimation from '@/components/motion';// corrected import
import '@/styles/globals.css';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const [isRevealTriggered, setIsRevealTriggered] = useState(false);
  const [counter, setCounter] = useState(0);

  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => Math.min(counter + 1, 100)); // Ensure counter maxes out at 100
    }, 25);

    return () => clearInterval(count);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, []);


  return (
    <>
      {/* {!isRevealTriggered && <LoadingAnimation />} */}

      {false ? (
        <HomeLoader />
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
  c
}
