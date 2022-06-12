import '../styles/vars.css';
import '../styles/styling.css';
import '../styles/pages.css';
import '../styles/components.css';
import '../styles/media-sizes.css';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
}

export default MyApp
