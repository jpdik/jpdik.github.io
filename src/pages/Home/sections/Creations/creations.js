import AWSSACreation from '@assets/creations/aws-sa_mock.png';
import CowebCreation from '@assets/creations/coweb_mock.png';
import DirSharedCreation from '@assets/creations/dirshared_mock.png';
import UzaCreation from '@assets/creations/uza_mock.png';

export const creations = [
  {
    image: DirSharedCreation,
    title: 'DirShared',
    description:
      'DirShared é um serviço de compartilhamento de arquivos utilizando uma URL simples. Ele permite o compatilhamento de alguns tipos de arquivos com um tamanho limitado. O serviço foi desenvolvido com o intuito de ser simples e prático, sem a necessidade de cadastro ou login. O serviço foi desenvolvido utilizando uma ingtegração com Dropbox, backend em Python, frontend em React. O mesmo funciona como um PWA também.',
  },
  {
    image: CowebCreation,
    title: 'Coweb',
    description:
      'Coweb é um sistema eletrônico de monitoramento remoto capaz de detectar e informar ao usuário via web e dispositivos móveis (celulares), a variação do desenvolvimento de sua pastagem, indicando de forma automatizada o momento de entrada e saída dos animais nos piquetes, a fim de otimizar o manejo da exploração intensiva do gado. O sistema foi desenvolvido em Ruby on Rails.',
  },
  {
    image: AWSSACreation,
    title: 'aws-automation API Gateway',
    description:
      'aws-automation API Gateway é um projeto que visa automatizar a criação de APIs no AWS API Gateway. O projeto foi desenvolvido como uma biblioteca de linha de compando no pip de Python, utiliza as API`s AWS SDK e AWS CLI. O mesmo foi desenvolvido para ser utilizado em pipelines de CI/CD, onde o mesmo é capaz de criar e configurar APIs no AWS API Gateway de forma mais automatizada.',
  },
  {
    image: UzaCreation,
    title: 'Uza Palmas',
    description:
      'Uza Palmas é um aplicativo de compra, experimentação e entrega de produtos da marca UZA sem que o cliente precise sair de casa. O aplicativo foi desenvolvido como um produto para um cliente da cidade de Palmas-TO. O aplicativo foi desenvolvido utilizando Ionic, MongoDB e Python',
  },
];
