import {useState} from 'react';

import {size} from '@utils/media_query';
import {useTranslation} from 'react-i18next';

import useWindowDimensions from '@hooks/useWindowDimensions';

import {skills} from '@pages/Home/sections/Skills/skills';

import ProgressBar from '@components/ProgressBar';

import {
  Card,
  CardImage,
  CardTitle,
  Content,
  Section,
  SliderContent,
  Title,
} from './style';

const Skills = () => {
  const {width} = useWindowDimensions();

  const {t} = useTranslation();

  const [skills_options] = useState(skills);

  const renderSkills = () => {
    return skills_options.map((item, index) => (
      <Card key={index}>
        <CardTitle>{item.title}</CardTitle>
        <CardImage $image={item.image} />
        <ProgressBar $bgcolor="#008bf8" $progress={item.value} $height={30} />
      </Card>
    ));
  };

  const slidesToShow = () => {
    if (width > size.desktop) return 4;
    else if (width > size.mediumD) return 3;
    else if (width > size.medium) return 2;

    return 1;
  };

  return (
    <Section id="skills">
      <Title>{t('skillsTitle')}</Title>
      <Content>
        <SliderContent
          swipe={false}
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

export default Skills;
