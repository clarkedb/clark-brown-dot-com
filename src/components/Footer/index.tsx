import React from 'react';

import Container from '../../components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.FooterText>
        © Clark Brown 2020
      </Styled.FooterText>
      <Styled.Links>
        <Styled.Link
          href="https://github.com/clarkedb"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Styled.Link>
        <Styled.Link
          href="https://twitter.com/MetaphorComplex"
          rel="noreferrer noopener"
          target="_blank"
        >
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/clark-ed-brown"
          rel="noreferrer noopener"
          target="_blank"
        >
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
