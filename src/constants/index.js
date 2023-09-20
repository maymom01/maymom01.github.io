import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  docker,
  html,
  css,
  reactjs,
  azure,
  tailwind,
  nodejs,
  git,
  figma,
  SQL,
  php,
  pyton,
  java,
  rock,
  leaderboard,
  math,
  movie,
  nyeusi
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Full-Stack Developer',
    icon: frontend,
  },
  {
    title: 'API Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'azure Toolkit',
    icon: azure,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: pyton,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'SQL',
    icon: SQL,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'AlugueAq',
    iconBg: '#333333',
    date: 'Fev 2019 - Dez 2019',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Conta Comigo',
    iconBg: '#333333',
    date: 'Marc 2020 - Jun 2022',
  },

  {
    title: 'Full Stack Developer',
    company_name: 'Rock Store',
    iconBg: '#333333',
    date: 'Out 2022 - Dez 2022',
  },

  {
    title: 'Application Developer',
    company_name: 'Rock Store',
    iconBg: '#333333',
    date: 'Mai 2023 - Set 2023',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Rock&Store',
    description: 'Uma loja de moda alternativa que une o melhor dos mundos do rock, geek e anime',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: rock,
    demo: 'https://www.figma.com/proto/hDuebKSVSLD47kEa2qqFmJ/Rock-%26-Store?type=design&node-id=1-2&t=H1kubXrz63GQDNNS-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
     demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    demo: 'https://movie-metro.netlify.app/',
  },
 
];

export { services, technologies, experiences, projects };
