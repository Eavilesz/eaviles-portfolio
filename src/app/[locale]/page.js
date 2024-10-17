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

const skills = [
  { name: 'React', icon: FaReact, iconColor: '#00d8ff' },
  { name: 'Next.js', icon: RiNextjsLine },
  { name: 'TypeScript', icon: TbBrandTypescript, iconColor: '#3178c6' },
  { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
  { name: 'Git', icon: FaGitAlt, iconColor: '#F1502F' },
  { name: 'Jira', icon: SiJira, iconColor: '#0052CC' },
];

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main className="container mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-64px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center"
      >
        <Image
          src={profilePic}
          alt="Ernesto Aviles"
          width={150}
          height={150}
          className="rounded-full mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Ernesto Avilés</h1>
        <p className="text-xl mb-6">{t('presentation')}</p>
        <p className="max-w-2xl mb-8">{t('description')}</p>
        <div className="flex space-x-4 mb-8">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-white hover:text-gray-300"
            >
              <link.icon size={24} color={link.iconColor} />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </div>
        <div className="w-full max-w-2xl mt-10">
          <h2 className="text-2xl font-bold mb-4">{t('mainSkills')}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Badge
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1 text-sm"
                >
                  <skill.icon size={'22px'} color={skill.iconColor} />
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
