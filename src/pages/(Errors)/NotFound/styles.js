import styled from 'styled-components';

export const Container = styled.main`
  background: #ff3300;

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  color: white;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  > svg {
    max-height: 70vh;
  }

  > h1 {
    text-align: center;
    font-size: 4rem;
    font-style: italic;
    text-transform: uppercase;
  }
`;
