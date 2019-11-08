import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const CookiesPage = () => (
  <Layout>
    <SEO title="Cookies" />
    <h1>Cookies</h1>
    <p>
      This website uses "cookies". Cookies are a text file stored on your
      computer, mobile phone, tablet or equivalent for the purpose of
      recognizing it, remembering settings, performing statistics and targeting
      ads. Cookies cannot contain malicious code such as viruses.
    </p>

    <p>
      You can delete or block cookies. See how here:{' '}
      <a href="http://minecookies.org/cookiehandtering">
        http://minecookies.org/cookiehandtering
      </a>
    </p>

    <h1>Important Cookies</h1>

    <p>
      Some cookies are required for the website to work. The website does not
      work properly without these cookies and they are enabled by default.
    </p>

    <h1>Google Analytics</h1>

    <p>
      These cookies allow us to count visitors and traffic sources so that we
      can measure and improve the performance of our website. They help us
      figure out which pages are most and least popular as well as how visitors
      move around the page.
    </p>

    <a href="http://tools.google.com/dlpage/gaoptout">
      Click here to opt out of cookies from Google Analytics.
    </a>
  </Layout>
);

export default CookiesPage;
