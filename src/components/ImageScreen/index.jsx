import {useCallback, useEffect} from 'react';

import {CloseButton, Container, Image, ImageContainer} from './style';

const ImageScreen = props => {
  const escFunctionImage = useCallback(
    event => {
      if (event.key === 'Escape') {
        if (props.show) {
          props.onClose();
        }
      }
    },
    [props],
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunctionImage, false);

    return () => {
      document.removeEventListener('keydown', escFunctionImage, false);
    };
  }, [escFunctionImage]);

  if (props.show) {
    return (
      <Container onClick={props.onClose}>
        <CloseButton onClick={props.onClose} />
        <ImageContainer {...props} onClick={props.onClose}>
          <Image src={props.show} />
        </ImageContainer>
      </Container>
    );
  }
};

export default ImageScreen;
