import styled, {css} from 'styled-components';

export const Section = styled.div`
  width: 100%;
  height: auto;
  clear: both;
  float: left;

  background-color: white;
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

export const Icon = styled.div`
  @keyframes colorChange {
    to {
      background-position: left;
    }
  }

  height: 45px;
  min-width: 45px;
  border-radius: 50%;
  text-align: center;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    if (props.$position === 1) {
      return css`
        background: -webkit-radial-gradient(
            top,
            farthest-corner,
            #fff 0,
            #fedb37 4%,
            #fde431 12.25%,
            #a3a717 31.25%,
            #afa424 50%
          )
          100% 0/200% 250%;
        background: radial-gradient(
            farthest-corner at top,
            #fff 0,
            #fedb37 4%,
            #fde431 12.25%,
            #a3a717 31.25%,
            #afa424 50%
          )
          100% 0/200% 250%;
      `;
    }
    if (props.$position === 2) {
      return css`
        background: -webkit-radial-gradient(
            top,
            farthest-corner,
            #fff 0,
            silver 4%,
            #b1b1b1 12.25%,
            #a2a2a2 31.25%,
            #cfcfcf 50%
          )
          100% 0/200% 250%;
        background: radial-gradient(
            farthest-corner at top,
            #fff 0,
            silver 4%,
            #b1b1b1 12.25%,
            #a2a2a2 31.25%,
            #cfcfcf 50%
          )
          100% 0/200% 250%;
      `;
    }
    if (props.$position === 3) {
      return css`
        background: -webkit-radial-gradient(
            top,
            farthest-corner,
            #fff 0,
            #cd7f32 4%,
            #be7023 12.25%,
            #af6114 31.25%,
            #dc8e41 50%
          )
          100% 0/200% 250%;
        background: radial-gradient(
            farthest-corner at top,
            #fff 0,
            #cd7f32 4%,
            #be7023 12.25%,
            #af6114 31.25%,
            #dc8e41 50%
          )
          100% 0/200% 250%;
      `;
    }
    return css`
      background: -webkit-radial-gradient(
          top,
          farthest-corner,
          #fff 0,
          #b9b9b9 4%,
          #777 12.25%,
          #2d2d2d 31.25%,
          #000 50%
        )
        100% 0/200% 250%;
      background: radial-gradient(
          farthest-corner at top,
          #fff 0,
          #b9b9b9 4%,
          #777 12.25%,
          #2d2d2d 31.25%,
          #000 50%
        )
        100% 0/200% 250%;
    `;
  }}

  -webkit-animation: colorChange 3s infinite alternate;
  animation: colorChange 3s infinite alternate;
`;
