import {Container, Content, Text} from './style';

const ProgressBar = props => {
  const renderExperience = () => {
    let experience = 'Iniciante';
    if (props.$progress >= 30) experience = 'Intermediário';
    if (props.$progress >= 60) experience = 'Avançado';
    if (props.$progress >= 80) experience = 'Profissional';
    if (props.$progress > 95) experience = 'Especialista';

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
