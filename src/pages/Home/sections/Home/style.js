import {device} from '@utils/media_query';
import styled from 'styled-components';

import Hand from '@assets/home/hand.svg?react';
import LogoH from '@assets/home/logo_horizontal.svg?react';

export const Section = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: var(--background);
  position: relative;
`;

export const HandLogo = styled(Hand)`
  position: absolute;

  width: 30%;
  height: 100%;
  right: 10%;
  max-height: 700px;
  top: 50%;
  transform: translateY(-50%);

  color: var(--main);

  @media ${device.mobile} {
    right: 40%;
    top: 7.5%;

    height: auto;
    max-height: 300px;
    max-width: 270px;
    transform: none;
  }

  @keyframes blink {
    0% {
      opacity: 1;
      color: var(--main);
    }
    25% {
      opacity: 1;
      color: var(--background);
    }
    50% {
      opacity: 1;
      color: var(--main);
    }
    75% {
      opacity: 1;
      color: var(--background);
    }
    100% {
      opacity: 1;
      color: var(--main);
    }
  }

  animation: blink 10000ms infinite;
`;

export const Presentation = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);

  text-align: center;

  max-width: 40%;

  @media ${device.mobile} {
    width: 100%;
    max-width: 100%;
    left: 0;

    padding: 0 2em;

    margin-top: 40px;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--main);

    margin-bottom: 4rem;
    line-height: normal;

    span {
      color: var(--secondary);
    }
  }

  p {
    font-size: 1.5rem;
    color: var(--secondary);

    span {
      color: var(--main);
    }
  }
`;

export const LogoContaniner = styled.div`
  text-align: center;

  margin-bottom: 8rem;

  @media ${device.mobile} {
    margin-bottom: 2rem;
  }
`;

export const LogoImage = styled(LogoH)`
  height: 150px;

  color: white;
`;
