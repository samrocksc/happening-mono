import React from 'react';

import {
  Button,
  ColorButton,
  Container,
  ContainerItem,
  Layout,
} from 'happening-components';

const Event = () => (
  <Layout>
    <Container centerWrap>
      <Container stackableBox>
        <Container>
          <ColorButton paleRed />
          <ColorButton green />
          <ColorButton orange />
          <ColorButton red />
        </Container>
        <Container stackableBox>
          <ContainerItem>
            <Button primary>Submit</Button>
          </ContainerItem>
          <ContainerItem>
            <Button secondary>Cancel</Button>
          </ContainerItem>
        </Container>
      </Container>
    </Container>
  </Layout>
);

export default Event;
