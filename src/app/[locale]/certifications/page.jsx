'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { FaReact } from 'react-icons/fa';
import { FaMeta } from 'react-icons/fa6';

const certifications = [
  {
    name: 'PROGRAMMING WITH JAVASCRIPT',
    icon: FaMeta,
    iconColor: ' #0082fb',
    url: 'https://coursera.org/share/c9e93783fed14b83723025db5815b500',
  },
  {
    name: 'INTRODUCTION TO FRONTEND DEVELOPMENT',
    icon: FaMeta,
    iconColor: ' #0082fb',
    url: 'https://coursera.org/share/c9e93783fed14b83723025db5815b500',
  },
  {
    name: 'VERSION CONTROL',
    icon: FaMeta,
    iconColor: ' #0082fb',
    url: 'https://coursera.org/share/1d493a8c0c52b04c9dd3dc8ac56b03e9',
  },
  {
    name: 'FULL STACK MERN',
    icon: FaReact,
    iconColor: '#00d8ff',
    url: 'https://www.credly.com/badges/a948430c-9749-46b4-9d3f-00bde1d3f971/linked_in_profile',
  },
];

export default function Certifications() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <motion.a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors duration-300">
              <CardContent className="flex items-center p-4 h-20">
                <cert.icon
                  size={'2rem'}
                  color={cert.iconColor}
                  className="mr-3 h-8"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-zinc-200">{cert.name}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
