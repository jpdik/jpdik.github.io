import {useState} from 'react';

import {skills} from '@utils/skills';
import {useTranslation} from 'react-i18next';

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

  return (
    <Section id="skills">
      <Title>{t('skillsTitle')}</Title>
      <Content>
        <SliderContent
          swipe
          slidesToShow={4}
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
