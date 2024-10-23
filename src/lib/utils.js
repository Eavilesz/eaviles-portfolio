import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { RiNextjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { TbBrandMongodb } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiTestinglibrary } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGear } from 'react-icons/fa6';
import { TbBrandDjango } from 'react-icons/tb';
import { FaCss3Alt } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa6';
import { DiScrum } from 'react-icons/di';
import { FaReact } from 'react-icons/fa6';
import { FaFigma } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { SiJest } from 'react-icons/si';
import { FaRaspberryPi } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { SiPrisma } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

import spaceNews from '@/assets/spaceNews.avif';
import sttoria from '@/assets/sttoria.avif';
import taskManager from '@/assets/task-manager.avif';
import twilio from '@/assets/twilio.avif';
import jelou from '@/assets/jelou.avif';
import nido from '@/assets/nido.avif';
import dashboard from '@/assets/dashboard.avif';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getPortfolioProjects = (t) => ({
  title: t('projectsTitle'),
  projects: [
    {
      title: t('newsTitle'),
      description: t.rich('newsDescription'),
      image: spaceNews,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        { name: 'MongoDB', icon: TbBrandMongodb, iconColor: '#3FA037' },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          iconColor: '#38bdf9',
        },
        { name: 'API Integration', icon: FaGear, iconColor: '#38bdf9' },
      ],
      url: 'https://news-two-neon.vercel.app/',
    },
    {
      title: t('tasksTitle'),
      description: t('taskManagerDescription'),
      image: taskManager,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        { name: 'TypeScript', icon: BiLogoTypescript, iconColor: '#3178c6' },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          iconColor: '#38bdf9',
        },
        { name: 'API Integration', icon: FaGear, iconColor: '#38bdf9' },
        {
          name: 'Testing Library',
          icon: SiTestinglibrary,
          iconColor: '#d52e2c',
        },
      ],
      url: 'https://tasks-chi-two.vercel.app/',
    },
    {
      title: t('sttoriaTitle'),
      description: t('SttoriaDescription'),
      image: sttoria,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          iconColor: '#38bdf9',
        },
      ],
      url: 'https://sttoria.vercel.app/',
    },
    {
      title: t('dashboardTitle'),
      description: t('dashboardDescription'),
      image: dashboard,
      tags: [
        { name: 'Prisma', icon: SiPrisma, iconColor: '#800000' },
        { name: 'PostgreSQL', icon: BiLogoPostgresql, iconColor: '#008bb9' },
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        { name: 'TypeScript', icon: BiLogoTypescript, iconColor: '#3178c6' },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          iconColor: '#38bdf9',
        },
      ],
      url: 'https://nextjs-dashboard-eta-pied-59.vercel.app/dashboard',
    },
  ],
});

export const getPortfolioExperience = (t) => ({
  title: t('experienceTitle'),
  projects: [
    {
      title: t('twilioTitle'),
      description: t.rich('twilioDescription'),
      image: twilio,
      tags: [
        { name: 'TypeScript', icon: BiLogoTypescript, iconColor: '#3178c6' },
        { name: 'GIT', icon: FaGitAlt, iconColor: '#F1502F' },
        { name: 'Django', icon: TbBrandDjango, iconColor: '#092e20' },
        { name: 'Scrum', icon: DiScrum, iconColor: '#40E0D0' },
        { name: 'Jest', icon: SiJest, iconColor: '#EEC5B9' },
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        {
          name: 'CSS',
          icon: FaCss3Alt,
          iconColor: '#264de4',
        },
        { name: 'API Integration', icon: FaGear, iconColor: '#38bdf9' },
      ],
      url: 'https://www.twilio.com/docs',
    },
    {
      title: t('jelouTitle'),
      description: t('jelouDescription'),
      image: jelou,
      tags: [
        { name: 'React', icon: FaReact, iconColor: '#61dbfb' },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        {
          name: 'Tailwind CSS',
          icon: RiTailwindCssFill,
          iconColor: '#38bdf9',
        },
        { name: 'API Integration', icon: FaGear, iconColor: '#38bdf9' },
        {
          name: 'Figma',
          icon: FaFigma,
          iconColor: '#a259ff',
        },
        {
          name: 'Sass',
          icon: FaSass,
          iconColor: '#CD6799',
        },
      ],
      url: 'https://jelou.ai/',
    },
    {
      title: t('nidoTitle'),
      description: t('nidoDescription'),
      image: nido,
      tags: [
        { name: 'Raspberry PI', icon: FaRaspberryPi, iconColor: '#8cc04b' },
        { name: 'Arduino', icon: SiArduino, iconColor: '#00979C' },
        {
          name: 'Python',
          icon: FaPython,
          iconColor: '#ffde57',
        },
      ],
      url: 'https://nidointeractive.com/en/projects',
    },
  ],
});
