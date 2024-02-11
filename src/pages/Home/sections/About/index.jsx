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
      title: 'Nome',
      value: 'João Paulo',
    },
    {
      title: 'Idade',
      value: `${new Date('2019', '09' - 1, '11', '00', '00', '00') <= new Date() ? new Date().getFullYear() - 1996 : new Date().getFullYear() - 1995} anos`,
    },
    {
      title: 'E-mail',
      value: 'João Paulo',
    },
    {
      title: 'Localização',
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
          <Bio>
            Desde os 15 anos, sou apaixonado por tecnologia, especializando-me
            em programação e desenvolvimento de sites e aplicativos. Essa paixão
            me levou a contribuir significativamente em projetos inovadores.
          </Bio>
          <Bio>
            Atualmente, trabalho em uma empresa de delivery, onde lidero o
            desenvolvimento e a gestão de inovações, equilibrando múltiplos
            projetos. Essa experiência reforça meu compromisso com a melhoria
            contínua e a eficiência nos negócios, utilizando minha expertise
            técnica para otimizar processos e entregar a melhor uma experiência
            ao usuário.
          </Bio>
          <Info>
            <SubTitle>Informações</SubTitle>
            <Infos>{renderInfo()}</Infos>
          </Info>
        </Right>
      </Content>
    </Section>
  );
};

export default About;
