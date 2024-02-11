import {useTranslation} from 'react-i18next';

import Avatar from '@assets/about/me.jpg';

import {
  AvatarComponent,
  Bio,
  Content,
  Info,
  InfoItem,
  Infos,
  Left,
  Right,
  Section,
  SubTitle,
  Title,
} from './style';

const About = () => {
  const {t} = useTranslation();

  const info = [
    {
      title: t('infoName'),
      value: 'João Paulo',
    },
    {
      title: t('infoAge'),
      value: `${new Date('2019', '09' - 1, '11', '00', '00', '00') <= new Date() ? new Date().getFullYear() - 1996 : new Date().getFullYear() - 1995} anos`,
    },
    {
      title: t('infoEmail'),
      value: 'jpmdik@gmail.com',
    },
    {
      title: t('infoLocation'),
      value: 'São João del-Rei, MG - Brasil',
    },
  ];

  const renderInfo = () => {
    return info.map((item, index) => (
      <InfoItem key={index}>
        <strong>{item.title}:</strong>
        <p>{item.value}</p>
      </InfoItem>
    ));
  };

  return (
    <Section id="about">
      <Title>{t('aboutTitle')}</Title>
      <Content>
        <Left>
          <AvatarComponent src={Avatar} />
        </Left>
        <Right>
          <Bio>{t('aboutBioFirst')}</Bio>
          <Bio>{t('aboutBioSecond')}</Bio>
          <Info>
            <SubTitle>{t('infoTitle')}</SubTitle>
            <Infos>{renderInfo()}</Infos>
          </Info>
        </Right>
      </Content>
    </Section>
  );
};

export default About;
