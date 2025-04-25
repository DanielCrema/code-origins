import React from 'react';
import Head from 'next/head';
import Home from '@/components/home';

const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://maha-express.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maha Express" />
        <meta property="og:image:secure_url" itemProp="image" content="/logoOgImageKoD.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="157.5" />
        <meta property="og:description" content="Excelência em transportes" />
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="maha-express.vercel.app" />
        <meta property="twitter:url" content="https://maha-express.vercel.app/" />
        <meta name="twitter:title" content="Maha Express" />
        <meta name="twitter:description" content="Excelência em transportes" />
        <meta name="twitter:image" content="https://maha-express.vercel.app/logoOgImageKoD.png" />
        <title>Maha Express</title>
      </Head>
      <Home />

    </React.Fragment>
  );
}

export default Index;