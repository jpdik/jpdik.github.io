import {Slider} from 'infinite-react-carousel';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  background-color: var(--backgroundSecondary);
  padding: 40px 5%;
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

  max-width: 250px;
  min-width: 250px;
  height: 250px;
  border-radius: 20px;

  background-color: white;

  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-bottom: 50px;

  cursor: pointer;
`;

export const CardTitle = styled.h3`
  text-align: center;

  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 8px;
`;

export const CardImage = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 100px;
  background-image: url(${props => props.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
