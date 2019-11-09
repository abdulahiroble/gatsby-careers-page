import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const PostAjobPage = () => (
  <Layout>
    <SEO title="Post a job" />
    <h1>Post A Job</h1>
    <p>
      Companies can post job positions for Front End Developer roles for only
      350 DKK.
    </p>

    <p>
      If interested then you can email me at <br />{' '}
      <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
        abdulahi_2610@hotmail.com
      </a>{' '}
    </p>
  </Layout>
);

export default PostAjobPage;
