import {Slider} from 'infinite-react-carousel';
import ParallaxCard from 'react-animated-3d-card';
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

  margin-bottom: 0.5em;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  padding: 0 20px;

  overflow-x: auto;
  overflow-y: hidden;
  height: 400px;

  cursor: grab;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 8px; // for vertical scroll bar
    height: 8px; // for horizontal scroll bar
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;

export const SliderContent = styled(Slider)``;

export const Card = styled.div`
  margin: 0 20px;
  user-select: none;
`;

export const CardContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 20px 0;
`;

export const CardTitle = styled.h3`
  text-align: center;

  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 8px;

  flex: 1;

  text-shadow: 1px 1px 0px #6d6d6d;

  color: ${props => (props.$color ? props.$color : 'black')};
`;

export const CardImage = styled.div`
  height: 150px;
  width: 150px;

  flex: 3;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35px;
  background-color: ${props => (props.$color ? props.$color : 'black')};
`;
