import { Code2, User, Briefcase, Newspaper, Coffee, Github } from 'lucide-react';
import URL from '@/constants/Url';

export type MenuItems = {
  icon: React.ElementType;
  label: string;
  path: string;
  external?: boolean;
}[];

export const MENU_ITEMS: MenuItems = [
  { icon: User, label: '프로필', path: URL.ABOUT.PROFILE },
  { icon: Code2, label: '기술 스택', path: URL.ABOUT.SKILLS },
  { icon: Briefcase, label: '프로젝트', path: URL.ABOUT.PROJECTS },
  { icon: Newspaper, label: '블로그', path: URL.ABOUT.BLOG },
  { icon: Coffee, label: '컨택', path: URL.ABOUT.CONTACT },
  { icon: Github, label: 'Github', path: 'https://github.com/yeooonn', external: true },
];
