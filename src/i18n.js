import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ptJSON from './locale/ptBR.json';

i18n.use(initReactI18next).init({
  resources: {
    ptBR: ptJSON,
  }, // Where we're gonna put translations' files
  lng: 'ptBR', // Set the initial language of the App
});
