import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import CookieConsent from 'react-cookie-consent';

const Container = styled.footer`
  /* background-color: #000000;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center; */

  background-color: #000000;
  min-height: 8rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 1.3;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;

  /* color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  letter-spacing: 1.3;
  background-color: #000000;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100px;
  width: 100%; */
`;

// const ExternalLink = styled.a`
//   color: rgba(246, 2, 251, 0.6);
//   text-decoration: none;
// `;

const Footer = () => (
  <Container>
    <p>© 2019 frontenddeveloperjobs.dk</p>
    <CookieConsent
      location="bottom"
      buttonText="Accept Cookies"
      cookieName="myAwesomeCookieName2"
      style={{ background: '#2B373B' }}
      buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
      expires={150}
    >
      Vi bruger cookies til, at få vores hjemmeside til at virke ordentligt,
      personalisere indhold og reklamer, tilbyde funktioner i forhold til
      sociale medier og analysere vores traffik. Vi deler også information
      vedrørende din brug af vores hjemmeside med analytiske samarbejdspartnere
      <Link to="/cookies" style={{ textDecoration: 'none', color: 'yellow' }}>
        {' '}
        Læs mere om cookies
      </Link>
    </CookieConsent>
  </Container>
);

export default Footer;
