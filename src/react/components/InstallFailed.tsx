import React from 'react';
import styled from 'styled-components';
import { Gray3 } from '../colors';
import { Footer } from './Footer';
import { Header } from './typography/Header';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const LandingHeader = styled(Header)`
  flex-grow: 1;
`;

const Content = styled.div`
  color: ${Gray3};
  margin-top: 20;
  width: 650;
  flex-grow: 6;
`;

export const InstallFailed = () => {
  return (
    <Container>
      <LandingHeader>Install Failed</LandingHeader>
      <Content>
        Unfortunately your install failed. At this time we cannot provide any
        additonal info.
        <br />
        <br />
        <br />
        Please reach out to the ethstaker community for help.
      </Content>
      <Footer backLink={'/'} backLabel={'Home'} nextLink={''} nextLabel={''} />
    </Container>
  );
};
