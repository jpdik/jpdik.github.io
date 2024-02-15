import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  max-height: 600px;
  background-color: ${props => props.backgroundColor || 'transparent'};
  border-radius: 15px;
  overflow: hidden;

  padding: 40px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:after {
    content: 'X';
  }
`;
