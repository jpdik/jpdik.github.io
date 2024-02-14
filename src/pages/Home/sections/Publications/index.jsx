import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {size} from '@utils/media_query';
import {Chrono} from 'react-chrono';
import {useTranslation} from 'react-i18next';

import useWindowDimensions from '@hooks/useWindowDimensions';

import publications from './publications';
import {Content, Icon, Section, Title} from './style';

const Publications = () => {
  const {width} = useWindowDimensions();

  const {t} = useTranslation();

  const renderIcons = () => {
    return publications.map((item, index) => (
      <Icon key={index}>
        <FontAwesomeIcon color="white" icon={item.icon} size="lg" />
      </Icon>
    ));
  };

  const renderSize = () => {
    if (width > size.desktop) return 450;
    else if (width > size.mediumD) return 400;
    else if (width > size.medium) return 400;

    return 360;
  };

  return (
    <Section id="publications">
      <Title>{t('publicationsTitle')}</Title>
      <Content>
        <Chrono
          items={publications}
          mode="HORIZONTAL"
          showAllCardsHorizontal
          cardWidth={renderSize()}
          cardHeight={230}
          contentDetailsHeight={100}
          fontSizes={{
            title: '1rem',
          }}
          theme={{
            primary: 'black',
            secondary: 'black',
            titleColor: 'black',
            titleColorActive: '#ebebeb',
          }}
          slideShow>
          <div className="chrono-icons">{renderIcons()}</div>
        </Chrono>
      </Content>
    </Section>
  );
};

export default Publications;
