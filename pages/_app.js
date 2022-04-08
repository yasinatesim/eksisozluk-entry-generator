import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// Styles
import '@/assets/scss/app.scss';

function Layout({ Component, pageProps }) {
  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'tr-TR' }}
        title="Ekşi Sözlük Entry Generator"
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: 'Ekşi Sözlük Entry Generator' },
          { property: 'og:description', content: 'Ekşi Sözlük Entry Generator' },
        ]}
        link={[
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

Layout.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default Layout;
