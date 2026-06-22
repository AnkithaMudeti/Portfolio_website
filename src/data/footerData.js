import { navLinks } from '../constants/navLinks';

export const footerBrand = {
  logo: 'ANKITHA.',
  description:
    'Passionate Java Full Stack Developer focused on building scalable applications and beautiful digital experiences.',
};

export const footerCredits = {
  designedBy: 'Designed & Developed by Mudeti Ankitha',
  builtWith: 'Built with React + Vite',
};

export const footerQuickLinks = [
  ...navLinks,
  {
    label: 'Resume',
    url: '/resume/Ankitha_Mudeti_Resume.pdf',
    external: true,
  },
];

export const footerSocialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AnkithaMudeti',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ankitha-mudeti',
    icon: 'linkedin',
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/mudetiankitha371',
    icon: 'hackerrank',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/grace_sheep_37',
    icon: 'codechef',
  },
];
