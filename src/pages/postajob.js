import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const PostAjobPage = () => (
  <Layout>
    <SEO title="Post et job" />
    <h1
      style={{
        paddingLeft: '10px',
      }}
    >
      JOBOPSLAG
    </h1>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Virksomheder kan placere jobstillinger i webudvikling.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Interresede kan sende en e-mail <br />{' '}
      <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
        abdulahi_2610@hotmail.com
      </a>{' '}
    </p>
  </Layout>
);

export default PostAjobPage;
