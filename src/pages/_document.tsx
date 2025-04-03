/**
 * Custom Document component for the Chatbot application
 * This component:
 * - Handles theme initialization (light/dark mode)
 * - Prevents flash of unstyled content (FOUC)
 * - Sets up the base HTML structure
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/styles/FilePreview.css" />
        </Head>
        <body>
          {/* Theme initialization script - executes before page render */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Initialize and apply theme from localStorage or default to light theme
                (function() {
                  try {
                    var theme = localStorage.getItem('theme') || 'light';
                    document.documentElement.setAttribute('data-theme', theme);
                    
                    // Apply theme-specific styles
                    if (theme === 'dark') {
                      document.documentElement.classList.add('dark');
                      document.documentElement.style.colorScheme = 'dark';
                    } else {
                      document.documentElement.classList.remove('dark');
                      document.documentElement.style.colorScheme = 'light';
                    }
                  } catch (e) {
                    console.error('Error applying theme:', e);
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
