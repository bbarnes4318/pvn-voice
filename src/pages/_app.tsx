import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PVN Voice | Multi-Carrier VoIP Routing for Call Centers</title>
        <meta
          name="description"
          content="Multi-carrier VoIP routing for high-volume VICIdial call centers: automatic carrier failover, bring your own carrier, and per-attempt route visibility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
