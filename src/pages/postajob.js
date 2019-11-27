import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const PostAjobPage = () => (
  <Layout>
    <SEO title="Post a job" />
    <h1
      style={{
        paddingLeft: '10px',
      }}
    >
      Post A Job
    </h1>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Companies can post job positions for Front End Developer roles.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      If interested then you can email me at <br />{' '}
      <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
        abdulahi_2610@hotmail.com
      </a>{' '}
    </p>
  </Layout>
);

export default PostAjobPage;
