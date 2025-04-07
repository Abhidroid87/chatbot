import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component that handles:
 * - Theme initialization and persistence
 * - Base HTML structure and meta tags
 * - Core stylesheet loading
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="stylesheet" href="/styles/FilePreview.css" />
          <link rel="stylesheet" href="/styles/global.css" />
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  try {
                    const theme = localStorage.getItem('theme') || 'light';
                    document.documentElement.setAttribute('data-theme', theme);
                  } catch (e) {
                    console.warn('Theme initialization failed:', e);
                  }
                })()
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
