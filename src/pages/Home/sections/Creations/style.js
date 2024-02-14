import {device} from '@utils/media_query';
import {Slider} from 'infinite-react-carousel';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  background-color: var(--backgroundSecondary);
  padding: 40px 5%;

  @media ${device.mobile} {
    padding: 40px 10px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  color: var(--main);
  text-align: center;

  margin-bottom: 1.5em;
`;

export const Content = styled.div``;

export const SliderContent = styled(Slider)``;

export const Card = styled.div`
  position: relative;

  max-width: 400px;
  min-width: 500px;

  border-radius: 20px;

  background-color: white;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;

  cursor: pointer;

  @media ${device.mobile} {
    max-width: 98%;
    min-width: 98%;
  }
`;

export const CardImage = styled.div`
  margin: 40px 0;

  width: 100%;
  height: 150px;
  background-image: url(${props => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CardTitle = styled.h3`
  text-align: center;

  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 8px;

  margin-bottom: 20px;
`;

export const CardDescription = styled.div`
  padding: 0 20px;
  text-align: justify;

  font-size: 0.9em;
`;
