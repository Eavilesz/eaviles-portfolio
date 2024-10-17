'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RiNextjsLine } from 'react-icons/ri';
import { RiJavascriptLine } from 'react-icons/ri';
import { TbBrandMongodb } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { useTranslations } from 'next-intl';

import spaceNews from '../../../assets/space-news.png';
import sttoria from '../../../assets/sttoria.avif';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const t = useTranslations('Portfolio');

  const projects = [
    {
      title: 'Space News',
      description: t('newsDescription'),
      image: spaceNews,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        { name: 'MongoDB', icon: TbBrandMongodb, iconColor: '#3FA037' },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
      ],
      url: 'https://news-two-neon.vercel.app/',
    },
    {
      title: 'Sttoria Landing Page',
      description: t('SttoriaDescription'),
      image: sttoria,
      tags: [
        { name: 'Nextjs', icon: RiNextjsLine },
        { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
        { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
      ],
      url: 'https://sttoria.vercel.app/',
    },
  ];

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
              className="bg-black/20 border-teal-600 overflow-hidden h-full"
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
                <CardHeader>
                  <CardTitle className="text-teal-300 mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="min-h-32 text-white">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
