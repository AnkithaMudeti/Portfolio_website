import { memo } from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaServer,
  FaCloud,
  FaTools,
  FaLaptopCode,
  FaObjectGroup,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiApachemaven,
  SiHibernate,
} from 'react-icons/si';
import { GrOracle } from 'react-icons/gr';
import { VscCode, VscSymbolMethod } from 'react-icons/vsc';
import { TbApi, TbDevices, TbBinaryTree } from 'react-icons/tb';
import { MdArchitecture } from 'react-icons/md';

const iconMap = {
  html5: FaHtml5,
  css3: FaCss3Alt,
  javascript: FaJs,
  react: FaReact,
  responsive: TbDevices,
  tailwind: SiTailwindcss,
  java: FaJava,
  springboot: SiSpringboot,
  rest: TbApi,
  hibernate: SiHibernate,
  mysql: SiMysql,
  oracle: GrOracle,
  git: FaGitAlt,
  github: FaGithub,
  postman: SiPostman,
  vscode: VscCode,
  maven: SiApachemaven,
  aws: FaAws,
  oop: FaObjectGroup,
  mvc: MdArchitecture,
  restful: VscSymbolMethod,
  frontend: FaLaptopCode,
  backend: FaServer,
  database: FaDatabase,
  tools: FaTools,
  cloud: FaCloud,
};

function SkillIcon({ icon, className }) {
  const Icon = iconMap[icon] ?? TbBinaryTree;
  return <Icon className={className} aria-hidden="true" />;
}

export default memo(SkillIcon);
