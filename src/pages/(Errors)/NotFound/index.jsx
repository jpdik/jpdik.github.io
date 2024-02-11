import { Helmet } from "react-helmet";

import { Container } from "./styles";

const NotFoundPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Pagina não encontrada</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Helmet>
   
      <h1>Pagina não encontrada</h1>
      
    </Container>
  );
};

export default NotFoundPage;