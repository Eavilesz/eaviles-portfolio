import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Github } from 'lucide-react';
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
import { useTranslations } from 'next-intl';

export default function PortfolioSection({ portfolioObj }) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const t = useTranslations('Portfolio');

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section>
      <h2 className="text-4xl font-bold mb-12 text-center text-teal-300">
        {portfolioObj.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioObj.projects.map((project, index) => (
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
                <CardFooter className="flex justify-between items-center mt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                    aria-label={`View ${project.title} project`}
                  >
                    {t('viewProject')}
                    <ExternalLink size={16} />
                  </a>
                  {project.gitUrl && (
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 flex items-center gap-1"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </CardFooter>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
