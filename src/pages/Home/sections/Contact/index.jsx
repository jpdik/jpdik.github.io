import {useTranslation} from 'react-i18next';

import {
  Button,
  Content,
  Form,
  Input,
  Section,
  SubTitle,
  TextArea,
  Title,
} from './style';

const Contact = () => {
  const {t} = useTranslation();

  return (
    <Section id="contact">
      <Title>{t('contactTitle')}</Title>
      <SubTitle>{t('contactDescriptionFirst')}</SubTitle>
      <SubTitle>{t('contactDescriptionSecond')}</SubTitle>
      <Content>
        <Form
          id="contactform"
          action="//formspree.io/jpmdik@gmail.com"
          method="POST">
          <Input type="text" name="name" placeholder={t('contactName')} />
          <Input type="email" name="_replyto" placeholder={t('contactEmail')} />
          <TextArea name="message" placeholder={t('contactMessage')} />

          <Button type="submit">{t('contactSend')}</Button>
        </Form>
      </Content>
    </Section>
  );
};

export default Contact;
