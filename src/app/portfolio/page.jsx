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

import spaceNews from '../../assets/space-news.png';
import sttoria from '../../assets/sttoria.avif';

const projects = [
  {
    title: 'Space News',
    description:
      'A web app that shows the latest news related to space! This app consists in a Nextjs Frontend and Backend, that relies on a Mongo DB Database and a Vercel cron job that updates the news twice a day.',
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
    description:
      'Elegant landing page of the Sttoria Photography Studio. Showcasing their services with a bento-style image gallery and a minimalistic video player.',
    image: sttoria,
    tags: [
      { name: 'Nextjs', icon: RiNextjsLine },
      { name: 'JavaScript', icon: RiJavascriptLine, iconColor: '#F0DB4F' },
      { name: 'Tailwind CSS', icon: RiTailwindCssFill, iconColor: '#38bdf9' },
    ],

    url: 'https://sttoria.vercel.app/',
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="bg-gray-800 border-gray-700 overflow-hidden h-full"
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
                  <CardTitle className="text-white mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="min-h-20">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 min-h-20">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="flex items-center gap-1 h-min"
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
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    View Project <ExternalLink size={16} />
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
