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

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1',
    image: '/placeholder.svg?height=200&width=300',
    tags: [
      { name: 'React', icon: '/path/to/react-icon.svg' },
      { name: 'JavaScript', icon: '/path/to/javascript-icon.svg' },
    ],
    url: 'https://project1.com',
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2',
    image: '/placeholder.svg?height=200&width=300',
    tags: [
      { name: 'MongoDB', icon: '/path/to/mongodb-icon.svg' },
      { name: 'Node.js', icon: '/path/to/nodejs-icon.svg' },
    ],
    url: 'https://project2.com',
  },
  // Add more projects as needed
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
              className="bg-gray-800 border-gray-700 overflow-hidden"
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
                  className="w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="secondary"
                        className="flex items-center gap-1"
                      >
                        <Image
                          src={tag.icon}
                          alt={tag.name}
                          width={16}
                          height={16}
                        />
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
