import {size} from '@utils/media_query';
import {useTranslation} from 'react-i18next';

import useWindowDimensions from '@hooks/useWindowDimensions';

import {creations} from './creations';
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  Content,
  Section,
  SliderContent,
  Title,
} from './style';

const Creations = () => {
  const {width} = useWindowDimensions();

  const {t} = useTranslation();
  const renderSkills = () => {
    return creations.map((item, index) => (
      <Card key={index}>
        <CardImage $image={item.image} />
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </Card>
    ));
  };

  const slidesToShow = () => {
    if (width > size.desktop) return 3;
    else if (width > size.mediumD) return 3;
    else if (width > size.medium) return 2;

    return 1;
  };

  return (
    <Section id="creations">
      <Title>{t('creationsTitle')}</Title>
      <Content>
        <SliderContent
          swipe
          slidesToShow={slidesToShow()}
          autoplay
          arrows={false}
          duration={2000}
          autoplaySpeed={2000}>
          {renderSkills()}
        </SliderContent>
      </Content>
    </Section>
  );
};

export default Creations;
