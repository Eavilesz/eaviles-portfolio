'use client';

import { motion } from 'framer-motion';
import { Book, Code, Palette, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  { name: 'Advanced React Techniques', icon: Code, url: 'https://course1.com' },
  {
    name: 'UI/UX Design Fundamentals',
    icon: Palette,
    url: 'https://course2.com',
  },
  { name: 'Full Stack Development', icon: Book, url: 'https://course3.com' },
  // Add more certifications as needed
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
              <CardContent className="flex items-center p-4">
                <cert.icon className="w-8 h-8 mr-3 text-blue-400" />
                <div className="flex-grow">
                  <h3 className="font-semibold">{cert.name}</h3>
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
