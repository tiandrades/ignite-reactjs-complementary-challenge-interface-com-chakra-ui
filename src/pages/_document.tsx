import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <link rel="shortcut icon" href="/images/logo-icon.png" type="image/png" />

          <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}