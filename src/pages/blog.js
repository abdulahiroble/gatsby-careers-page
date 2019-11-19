import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1
      style={{
        paddingLeft: '10px',
      }}
    >
      Blog
    </h1>
  </Layout>
);

export default BlogPage;
