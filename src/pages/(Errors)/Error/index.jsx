import {Helmet} from 'react-helmet';
import {useRouteError} from 'react-router-dom';

import {Container} from './styles';

const ErrorPage = () => {
  const error = useRouteError();

  console.error(error);

  return (
    <Container>
      <Helmet>
        <title>Ocorreu um erro</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
      <div>Erro</div>
    </Container>
  );
};

export default ErrorPage;
