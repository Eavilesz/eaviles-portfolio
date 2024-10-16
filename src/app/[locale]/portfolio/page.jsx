'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { RiNextjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { TbBrandMongodb } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import { SiTestinglibrary } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaGear } from 'react-icons/fa6';

import spaceNews from '../../../assets/space-news.png';
import sttoria from '../../../assets/sttoria.avif';
import taskManager from '@/assets/task-manager.avif';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const t = useTranslations('Portfolio');

  const projects = [
    {
      title: t('newsTitle'),
      description: t.rich('newsDescription'),
      image: spaceNews,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine, iconColor: '#000000' },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        { name: 'MongoDB', icon: TbBrandMongodb, iconColor: '#3FA037' },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
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
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
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
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
      ],
      url: 'https://sttoria.vercel.app/',
    },
  ];

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-4xl font-bold mb-12 text-center text-teal-300">
        {t('title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="bg-black/20 border-teal-600 overflow-hidden h-full flex flex-col"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredProject === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full object-cover h-64"
                />
                <CardHeader className="mb-4">
                  <CardTitle className="text-teal-300 mb-2 text-xl">
                    {project.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    className="text-teal-400 hover:text-teal-300 p-0 h-auto"
                    onClick={() => toggleDescription(index)}
                  >
                    {expandedDescriptions[index] ? (
                      <>
                        {t('hideDescription')}
                        <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        {t('seeDescription')}
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardHeader>
                <CardContent className="flex-grow">
                  <AnimatePresence>
                    {expandedDescriptions[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardDescription className="text-white text-md mb-4">
                          {project.description}
                        </CardDescription>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex flex-wrap gap-3 min-h-20">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="flex items-center gap-1 h-min bg-teal-100/20 text-white"
                      >
                        <tag.icon color={tag.iconColor} size={'22px'} />
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                  >
                    {t('viewProject')}
                    <ExternalLink size={16} />
                  </a>
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
