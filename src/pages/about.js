import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1
      style={{
        paddingLeft: '10px',
      }}
    >
      About
    </h1>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Hi
    </p>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      My name is Abdulahi and i'm a front end developer. I built
      frontenddeveloperjobs.dk because I wanted to have a place solely dedicated
      towards front end positions located in the Copenhagen area.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      When I was looking for a job back in 2018, I grew tired of filtering
      through back end and full stack developer jobs. And I was only interested
      in <strong>Front end roles</strong>.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      If you want to get in touch to give some feedback, discuss a partnership
      opportunity, or talk about front end roles, email me at: <br />
      <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
        abdulahi_2610@hotmail.com
      </a>
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      You can also check some of my other work here:{' '}
      <a href="https://linktr.ee/abdulahicodes" target="_blank">
        abdulahicodes
      </a>
    </p>
  </Layout>
);

export default AboutPage;
