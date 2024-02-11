import {useTranslation} from 'react-i18next';

import {
  HandLogo,
  LogoContaniner,
  LogoImage,
  Presentation,
  Section,
} from './style';

const Home = () => {
  const {t} = useTranslation();

  return (
    <Section id="home">
      <HandLogo />
      <Presentation>
        <LogoContaniner>
          <LogoImage />
        </LogoContaniner>
        <h1>
          {t('headerTitle')} <span>João Paulo</span>
        </h1>
        <p>
          {t('headerDescriptionFirst')}{' '}
          <span>{t('headerDescriptionRole')}</span>
          {t('headerDescriptionSecond')}
        </p>
      </Presentation>
    </Section>
  );
};

export default Home;
