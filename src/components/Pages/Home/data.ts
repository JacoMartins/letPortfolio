import React from 'react';
import moonve from '../../../assets/images/moonve.jpeg';
import seraphine from '../../../assets/images/seraphine.jpeg';
import menphy from '../../../assets/images/menphy.jpeg';

import sobrelet_1 from '../../../assets/images/sobrelet1.jpeg'
import sobrelet_2 from '../../../assets/images/sobrelet2.jpeg'
import sobrelet_3 from '../../../assets/images/sobrelet3.jpeg'

export const letSummary1 = [
  {
    infoTitle: 'Fotografia',
    value: '91%'
  },

  {
    infoTitle: 'Comunicação',
    value: '100%'
  },

  {
    infoTitle: 'Proatividade',
    value: '90%'
  },
];

export const letSummary2 = [
  {
    infoTitle: 'Midias Sociais',
    value: '85%'
  },

  {
    infoTitle: 'Marketing Digital',
    value: '75%'
  },

  {
    infoTitle: 'Edição de fotos',
    value: '72%'
  },
];

export const letContact = [
  {
    text: 'Instagram',
    description: '@aleticiareiss',
    image: 'Instagram',
    link: 'https://www.instagram.com/aleticiareiss/',
    type: 'contact'
  },
  {
    text: 'Telefone',
    description: '(85) 9 8788-3999',
    image: 'Phone',
    link: 'tel:(85) 9 8788-3999',
    type: 'contact'
  },
  {
    text: 'Email',
    description: 'aleticiareiss@gmail.com',
    image: 'Email',
    link: 'mailto: aleticiareiss@gmail.com',
    type: 'contact'
  },
  {
    text: 'Whatsapp',
    description: '(85) 9 8788-3999',
    image: 'Whatsapp',
    link: 'https://wa.me/+5585987883999',
    type: 'contact'
  },
]

export const letCourses = [
  {
    text: 'Como falar em público',
    description: 'Google',
    image: 'Cert',
    link: null,
    type: 'cert'
  },

  {
    text: 'Como organizar eventos de sucesso',
    description: 'Doity',
    image: 'Cert',
    link: null,
    type: 'cert'
  },

  {
    text: 'Inglês Very Easy',
    description: 'Rede Cuca',
    image: 'Cert',
    link: null,
    type: 'cert'
  },

  {
    text: 'Liderança',
    description: 'Senai',
    image: 'Cert',
    link: null,
    type: 'cert'
  },

  {
    text: 'Liderança',
    description: 'Sebrae • Como desenvolver times de alta perfomance',
    image: 'Cert',
    link: null,
    type: 'cert'
  },
]

export const Projetos = [
  {
    titulo: 'Moonve',
    key: 9890,
    descricao: 'Moonve é uma marca com ideias de reutilização de roupas e coisas artesanais. Conta sobre a lua que, em suas fases, muda o seu formato de acordo com a sombra que a cobre.  dentro das tendências da moda.',

    items: [
      {
        src: moonve,
        alt: 'Garota com roupa bem produzida',
        titulo: 'Sobre',
        texto: 'Moonve Logo',
        key: 3412411
      },
    ]
  },

  {
    titulo: 'Seraphine',
    key: 9890,
    descricao: 'Seraphine é uma marca de roupa feminina inspirada na Loja Florinda. Tem como objetivo, enaltecer a cultura fortalezense através das roupas, cores e estamparia.',

    items: [
      {
        src: seraphine,
        alt: 'Seraphine Logo',
        titulo: 'Sobre',
        texto: 'Poses e looks inspirados na vivência da sociedade',
        key: 3412411
      },
    ]
  },

  {
    titulo: 'Menphy',
    key: 9890,
    descricao: 'Menphy é uma instituição, como o nome já diz, de abrigo e suporte à pessoas carentes e sem família com todas as idades possíveis.',

    items: [
      {
        src: menphy,
        alt: 'Menphy Logo',
        titulo: 'Sobre',
        texto: 'Poses e looks inspirados na vivência da sociedade',
        key: 3412411
      },
    ]
  },

]

export const Sobre = [
  {
    titulo: '',
    key: 9890,
    descricao: '',

    items: [
      {
        src: sobrelet_1,
        alt: 'Garota com roupa bem produzida',
        titulo: 'Sobre',
        texto: 'Poses e looks inspirados na vivência da sociedade',
        key: 3412411
      },
      {
        src: sobrelet_3,
        alt: '',
        titulo: 'Sobre',
        texto: 'Poses e looks inspirados na vivência da sociedade',
        key: 2541
      },
      {
        src: sobrelet_2,
        alt: '',
        titulo: 'Sobre',
        texto: 'Poses e looks inspirados na vivência da sociedade',
        key: 34312
      },
    ]
  },
]