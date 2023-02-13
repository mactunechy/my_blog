import React from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // A hack to avoid the blog layout in the homepage
  if (router.pathname === '/') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
