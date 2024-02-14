import {useEffect, useState} from 'react';

import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {size} from '@utils/media_query';
import {Chrono} from 'react-chrono';
import {useTranslation} from 'react-i18next';

import useDataLocal from '@hooks/useDataLocal';
import useWindowDimensions from '@hooks/useWindowDimensions';

import {Content, Icon, Section, Title} from './style';

const Awards = () => {
  const {t} = useTranslation();

  const {width} = useWindowDimensions();
  const {data} = useDataLocal('awards');

  const [awards, setAwards] = useState([]);

  useEffect(() => {
    if (data) {
      setAwards(data);
    }

    return () => {
      setAwards([]);
    };
  }, [data]);

  const renderIcons = () => {
    return awards.map((item, index) => (
      <Icon key={index} $position={item.position}>
        <FontAwesomeIcon color="white" icon={faStar} size="sm" />
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
    <Section id="awards">
      <Title>{t('awardsTitle')}</Title>
      <Content>
        <Chrono
          items={awards}
          allowDynamicUpdate={true}
          mode="HORIZONTAL"
          showAllCardsHorizontal
          cardWidth={renderSize()}
          cardHeight={230}
          contentDetailsHeight={100}
          fontSizes={{
            title: '1rem',
          }}
          theme={{
            primary: '#ebebeb',
            secondary: '#008bf8',
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

export default Awards;
