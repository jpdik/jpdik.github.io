import {useTranslation} from 'react-i18next';

import {Container, Content, Text} from './style';

const ProgressBar = props => {
  const {t} = useTranslation();

  const renderExperience = () => {
    let experience = t('skillExperienceNovice');
    if (props.$progress >= 30) experience = t('skillExperienceIntermediate');
    if (props.$progress >= 60) experience = t('skillExperienceAdvanced');
    if (props.$progress >= 80) experience = t('skillExperienceProfessional');
    if (props.$progress > 95) experience = t('skillExperienceExpert');

    return experience;
  };

  return (
    <Container {...props}>
      <Content {...props}>
        <Text>{`${props.$progress}% - ${renderExperience()}`}</Text>
      </Content>
    </Container>
  );
};

export default ProgressBar;
