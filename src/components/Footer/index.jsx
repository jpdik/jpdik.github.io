import {useTranslation} from 'react-i18next';

import {FooterContainer} from './styles';

export const Footer = () => {
  const {t} = useTranslation();

  return (
    <FooterContainer>
      2019 - {new Date().getFullYear()} © {t('footerMessage')}
    </FooterContainer>
  );
};
