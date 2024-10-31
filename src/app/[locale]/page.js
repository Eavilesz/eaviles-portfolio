'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaGitAlt } from 'react-icons/fa6';
import { SiJira } from 'react-icons/si';
import { RiEnglishInput } from 'react-icons/ri';
import { FaBrain } from 'react-icons/fa';
import { RiLightbulbFlashFill } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

import profilePic from '../../assets/profile-pic.jpg';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    iconColor: '#0e76a8',
    url: 'https://www.linkedin.com/in/ernesto-aviles-zavala',
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/Eavilesz',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    iconColor: '#8134AF',
    url: 'https://www.instagram.com/ernesto_av/',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    iconColor: '#1877F2',
    url: 'https://www.facebook.com/ernesto.aviles.14',
  },
];

export default function Home() {
  const t = useTranslations('HomePage');

  const skills = [
    { name: 'React', icon: FaReact, iconColor: '#00d8ff' },
    { name: 'Next.js', icon: RiNextjsLine },
    { name: 'TypeScript', icon: TbBrandTypescript, iconColor: '#3178c6' },
    { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
    { name: 'Git', icon: FaGitAlt, iconColor: '#F1502F' },
    { name: 'Jira', icon: SiJira, iconColor: '#0052CC' },
    {
      name: t('englishProficiency'),
      icon: RiEnglishInput,
      iconColor: '#4DB6AC',
    },
    { name: t('fastLearning'), icon: FaBrain, iconColor: '#4DB6AC' },
    {
      name: t('problemSolver'),
      icon: RiLightbulbFlashFill,
      iconColor: '#4DB6AC',
    },
  ];

  return (
    <main className="text-white py-6 px-4 w-full max-w-7xl mx-auto flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center w-full"
      >
        <Image
          src={profilePic}
          alt="Ernesto Aviles"
          width={200}
          height={200}
          className="rounded-full mb-8 border-4 border-teal-400"
          priority
        />
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
          Ernesto Avilés
        </h1>
        <p className="text-2xl sm:text-3xl mb-8 text-teal-300">
          {t('presentation')}
        </p>
        <p className="text-lg sm:text-xl mb-8 leading-relaxed max-w-3xl">
          {t('description')}
        </p>
        <div className="flex space-x-6 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-teal-400 transition-colors"
              aria-label={`Visit ${link.name} profile`}
            >
              <link.icon size={32} />
            </motion.a>
          ))}
        </div>
        <div className="w-full mt-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-300">
            {t('mainSkills')}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 text-lg bg-opacity-80 bg-white backdrop-filter backdrop-blur-lg"
                >
                  <skill.icon size={24} color={skill.iconColor} />
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </main>
  );
}
