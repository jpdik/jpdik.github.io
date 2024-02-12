import {device} from '@utils/media_query';
import styled from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  background-color: var(--background);
  padding: 40px 10%;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.5em;
  color: white;
  text-align: center;

  margin-bottom: 1em;

  @media ${device.mobile} {
    margin-bottom: 0.5em;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1em;
  color: white;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 1.5em;

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 0.5em;
  }
`;

export const Form = styled.form`
  min-width: 500px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    min-width: 300px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid white;
  background-color: white;
  color: black;

  border-radius: 5px;

  &::placeholder {
    color: #7f7f7f;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid white;
  background-color: white;
  color: black;

  resize: vertical;
  max-height: 200px;
  min-height: 100px;

  border-radius: 5px;

  font-family: var(--font-family);

  &::placeholder {
    color: #7f7f7f;
  }
`;

export const Button = styled.button`
  width: 140px;
  padding: 10px;
  margin: 10px 0;
  border: none;

  background-color: var(--main);
  color: white;
  cursor: pointer;

  border-radius: 5px;
`;
