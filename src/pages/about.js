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
      Om os
    </h1>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Hey
    </p>
    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Mit navn er Abdulahi og jeg er en frontend-webudvikler. Jeg byggede       
      frontenddeveloperjobs.dk fordi jeg ville have et sted udelukkende
      dedikeret mod frontend positioner beliggende i Københavnsområdet.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Da jeg ledte efter et job tilbage i 2018, blev jeg træt af at filtrere
      igennem back end og fuld stack udvikler stillinger. Det skyldes at jeg kun
      var interesseret i stillinger som omhandlende frontend.
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Hvis du vil komme i kontakt for at give feedback eller andet kan du sende
      en mail: <br />
      <a href="mailto: abdulahi_2610@hotmail.com" target="_blank">
        abdulahi_2610@hotmail.com
      </a>
    </p>

    <p
      style={{
        paddingLeft: '1em',
      }}
    >
      Tjek også projekter og andet jeg har arbejdet med:{' '}
      <a href="https://linktr.ee/abdulahicodes" target="_blank">
        abdulahicodes
      </a>
      <a href="https://webudviklerjob.dk">Webudvikler</a>
    </p>
  </Layout>
);

export default AboutPage;
