import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  @media screen and (max-width: 678px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div<{ reverse: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const ColumnRight = styled.div<{ reverse: boolean }>`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
    width: 90%;
    height: 90%;
  }
`;

type Props = {
  infoData: {
    heading: string;
    paragraphOne: string;
    paragraphTwo: string;
    buttonLabel: string;
    image: any;
    reverse: boolean;
    delay: number;
  }[];
};

const InfoSection: React.FC<Props> = ({ infoData }) => {
  return (
    <Section>
      {infoData.map((item) => {
        return (
          <Container>
            <ColumnLeft reverse={item.reverse}>
              <h1>{item.heading}</h1>
              <p>{item.paragraphOne}</p>
              <p>{item.paragraphTwo}</p>
              <Button to="/homes" primary={true}>
                {item.buttonLabel}
              </Button>
            </ColumnLeft>
            <ColumnRight reverse={item.reverse}>
              <img src={item.image} alt="home" />
            </ColumnRight>
          </Container>
        );
      })}{' '}
    </Section>
  );
};

export default InfoSection;
