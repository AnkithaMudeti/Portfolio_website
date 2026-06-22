export const contactSection = {
  title: 'Get In Touch',
  subtitle:
    'Open to software engineering opportunities, collaborations and interesting conversations.',
};

export const contactCards = [
  {
    id: 'email',
    label: 'Email',
    value: 'ankithamudeti@gmail.com',
    href: 'mailto:ankithamudeti@gmail.com',
    icon: 'email',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+91 8341534673',
    href: 'tel:+918341534673',
    icon: 'phone',
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Nizamabad, Telangana, India',
    href: null,
    icon: 'location',
  },
  {
    id: 'availability',
    label: 'Availability',
    value: 'Open To Work',
    href: null,
    icon: 'work',
  },
];

export const contactSocialLinks = [
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

export const formFields = [
  { id: 'name', label: 'Name', type: 'text', required: true },
  { id: 'email', label: 'Email', type: 'email', required: true },
  { id: 'subject', label: 'Subject', type: 'text', required: true },
  { id: 'message', label: 'Message', type: 'textarea', required: true },
];

export const successMessage =
  'Thank you! Your message has been prepared. Email integration coming soon.';
