import {
  faBook,
  faBookReader,
  faChalkboard,
  faChalkboardTeacher,
  faPlaneDeparture,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

const publications = [
  {
    icon: faSearch,
    title: '2016 - 2017',
    cardTitle: 'Projeto de Iniciação Científica',
    cardSubtitle: `Utilização de Arduino para monitoramento dos gases gerados na maternidade do setor de Suinocultura do IF Sudeste MG - Campus Barbacena`,

    cardDetailedText:
      'Foi criado um equipamento que permitiu investigar, detectar e realizar a medição da concentração de Amônia, gás sulfídrico, metano e monóxido de carbono presente no ar atmosférico na maternidade do setor de suinocultura do IF Sudeste MG - Campus Barbacena, utilizando equipamentos computacionais simples e com custo baixo.',
  },
  {
    icon: faChalkboardTeacher,
    title: '2017',
    cardTitle: 'Programa de Monitoria',
    cardSubtitle: `Monitoria de atividades complementares das disciplinas do Curso de Tecnologia em Sistemas para Internet no Laboratório de Inovação e Robótica, utilizando kits Arduino e Lego, IF Sudeste MG - Campus Barbacena`,

    cardDetailedText:
      'Foi desenvolvido diversas atividades práticas para os alunos com os kits de Arduino e Lego, com o objetivo de que eles pudessem aprender de forma prática e dinâmica os conceitos de programação e eletrônica. Também foram realizadas atividades de monitoria para que os alunos pudessem tirar dúvidas e aprender mais sobre os conteúdos das disciplinas do curso.',
  },
  {
    icon: faBook,
    title: '08/2017',
    cardTitle: 'Publicação de Artigo em Evento Científico',
    cardSubtitle: `Seminário sobre pesquisa e desenvolvimento de plataformas computacionais centradas na Web: uma visão da Engenharia de Software, 2017. v. 1. p. 57-58. São João del-Rei, UFSJ`,

    cardDetailedText:
      'Foi desenvolvido um veículo semi-autônomo em Arduino que realiza comunicação Bluetooth com um Servidor através uma ponte de conexão (através de um protocolo UDP que implementa confiabilidade e um Middleware) e que se comunica com um cliente WebService em Microframework (Flask). O objetivo era obter o máximo de desempenho que um UDP pode oferecer sem ter perda de informações.',
  },
  {
    icon: faBookReader,
    title: '2018',
    cardTitle: 'Ensino e aprendizagem',
    cardSubtitle: `Programa de formação de professoras Moçambicanas, no ensino da tecnologia, IF Sudeste MG - Campus Barbacena`,

    cardDetailedText:
      'Foi ensinado a um grupo de moçambicanas que estava realizando um intercâmbio no Brasil, o básico de programação e eletrônica com arduino, com o objetivo de que elas pudessem aplicar esses conhecimentos na área da agropecuária.',
  },
  {
    icon: faSearch,
    title: '2018 - 2019',
    cardTitle: 'Projeto de Iniciação Científica',
    cardSubtitle: `Desenvolvimento de aplicativo para monitoramento remoto de Pastagems, IF Sudeste MG - Campus Barbacena`,

    cardDetailedText:
      'Foi construido um sistema computacional para detecção da variação da altura da pastagem através de um algoritmo utilizando o processamento de imagens. Após isso foi desenvolvido um aplicativo para que o produtor pudesse acompoanhar e fazer o melhor uso de suas pastagens.',
  },
  {
    icon: faPlaneDeparture,
    title: '2018 - 2019',
    cardTitle: 'Projeto de Intercâmbio Internacional',
    cardSubtitle: `Integrando informações sobre cursos oferecidos na guarda através de chatbots pelo Facebook Messenger, Instituto Politécnico de Guarda - Portugal`,

    cardDetailedText:
      'A inteligência artificial tem entregado diversas informações ao se comunicar com um humano de forma bem transparente e com respostas claras. Ela permite que um usuário fique bem informado através de interações e teve como objetivo neste trabalho que sua experiência pudesse parecer como se estivesse comunicando com uma pessoa que podia trazer diversas informações sobre o Instituto Politécnico da Guarda.',
  },
  {
    icon: faBookReader,
    title: '2019',
    cardTitle: 'Ensino e aprendizagem',
    cardSubtitle: `LabRedes de Conhecimento 5ª edição, Chatbots: da teoria ao deploy, com IBM Watson, IF Sudeste MG - Campus Barbacena`,

    cardDetailedText:
      'Os sistemas de chatbots estão cada vez mais presentes em nosso dia a dia, e com o objetivo de retorno ao intercâmbio, foi realizado um minicurso onde foi ensinado a teoria e a prática de como desenvolver um chatbot com a ferramenta IBM Watson.',
  },
];

export default publications;
