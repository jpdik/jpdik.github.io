import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;
`;

export const Hero = styled.div`
  width: 100%;
  min-height: 100vh;
  float: left;
  position: relative;
  overflow: hidden;
`;

export const HeroBack = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

export const HeroBackImage = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const HeroBackOverlay = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  /*	background-color: rgba(0,0,0,.4);*/
  z-index: 1;
`;

export const HeroContainer = styled.div`
  z-index: 2;
  height: 100vh;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100vh;
  float: left;
  position: relative;
`;

export const HeroContentIN = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeroName = styled.h3`
  font-weight: 700;
  font-size: 112px;
  text-transform: uppercase;
`;

export const HeroNameSpan = styled.div`
  color: var(--extra-color);
`;

export const HeroWelcome = styled.span`
  display: inline-block;
  font-size: 18px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 60px;

  &:before {
    position: absolute;
    content: '';
    width: 70px;
    height: 2px;
    background-color: var(--extra-color);
    left: 100%;
    margin-left: 2px;
    bottom: 9px;
  }
`;
