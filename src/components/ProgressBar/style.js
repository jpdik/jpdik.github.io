import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  bottom: 0;

  height: ${props => props.$height}px;
  width: 100%;
  background-color: #cdcdcd;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );
`;

export const Content = styled.div`
  height: 100%;
  width: ${props => props.$progress}%;
  background-color: ${props => props.$bgcolor};
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.05)
  );

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: ${props => (props.$progress > 94 ? '15px' : '0')};
`;

export const Text = styled.span`
  padding: 10px;
  color: white;
  font-weight: 900;
  text-wrap: nowrap;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;
