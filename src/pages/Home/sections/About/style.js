import {device} from '@utils/media_query';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  background-color: white;
  padding: 40px 10%;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  color: var(--main);
  text-align: center;

  margin-bottom: 1.5em;

  @media ${device.mobile} {
    margin-bottom: 0.5em;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
`;

export const AvatarComponent = styled.div`
  position: relative;
  overflow: hidden;

  width: 200px;
  height: 200px;
  border-radius: 50%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  &::before {
    background-size: cover;
    filter: blur(10px);
    transform: scale(1.1);
  }

  @media ${device.mobile} {
    margin-bottom: 1em;
  }
`;

export const Right = styled.div`
  flex: 2;
`;

export const Bio = styled.div`
  font-size: 1.2em;

  text-align: justify;

  margin-bottom: 1em;
`;

export const Info = styled.div``;

export const SubTitle = styled.div`
  font-size: 1.2em;
  color: var(--main);
  font-weight: bold;
`;

export const Infos = styled.div`
  display: flex;

  flex-wrap: wrap;
  margin-top: 1em;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const InfoItem = styled.div`
  justify-content: center;
  flex: 50%;
`;
