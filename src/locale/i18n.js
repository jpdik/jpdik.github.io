import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import ENIcon from '@assets/locale/en.png';
import PTBRIcon from '@assets/locale/ptBR.png';

import enJSON from './en/base.json';
import ptBRJSON from './ptBR/base.json';

export const DEFAULT_LOCALE = 'ptBR';

export const languages = [
  {
    nome: 'Português BR',
    src: PTBRIcon,
    locale: 'ptBR',
  },
  {
    nome: 'Inglês',
    src: ENIcon,
    locale: 'en',
  },
];

i18n.use(initReactI18next).init({
  resources: {
    ptBR: ptBRJSON,
    en: enJSON,
  }, // Where we're gonna put translations' files
  lng: localStorage.getItem('locale') || DEFAULT_LOCALE, // Set the initial language of the App
});
