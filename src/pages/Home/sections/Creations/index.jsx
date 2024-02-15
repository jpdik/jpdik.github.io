import {useEffect, useState} from 'react';

import {size} from '@utils/media_query';
import {useTranslation} from 'react-i18next';

import useDataLocal from '@hooks/useDataLocal';
import useWindowDimensions from '@hooks/useWindowDimensions';

import ImageScreen from '@components/ImageScreen';

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
  const {data} = useDataLocal('creations');

  const [creationsData, setCreationsData] = useState([]);

  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (data) {
      setCreationsData(() => {
        const dados = creations.map((item, index) => ({
          ...item,
          ...data[index],
        }));

        return dados;
      });
    }

    return () => {
      setCreationsData([]);
    };
  }, [data]);

  const renderSkills = () => {
    return creationsData.map((item, index) => (
      <Card key={index} onClick={() => setCurrentImage(item.image)}>
        <CardImage $image={item.image} />
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </Card>
    ));
  };

  const slidesToShow = () => {
    if (width > size.desktopH) return 3;
    else if (width > size.mediumD) return 2;
    else if (width > size.medium) return 2;

    return 1;
  };

  return (
    <Section id="creations">
      <ImageScreen
        backgroundColor="white"
        show={currentImage}
        onClose={() => setCurrentImage(null)}
      />
      <Title>{t('creationsTitle')}</Title>
      <Content>
        {creationsData.length !== 0 ? (
          <SliderContent
            swipe={false}
            slidesToShow={slidesToShow()}
            autoplay
            arrows={false}
            duration={2000}
            autoplaySpeed={2000}>
            {renderSkills()}
          </SliderContent>
        ) : null}
      </Content>
    </Section>
  );
};

export default Creations;
