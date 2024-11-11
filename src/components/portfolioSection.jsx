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
      <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">
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
              className="bg-white border-gray-200 shadow-lg overflow-hidden h-full flex flex-col"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                animate={{
                  scale: hoveredProject === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4"
                    quality={90}
                    priority={index < 3}
                  />
                </div>
                <CardHeader className="mb-4">
                  <CardTitle className="text-blue-800 mb-2 text-xl">
                    {project.title}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-white hover:bg-blue-600 p-1 h-auto w-fit flex mx-auto bg-slate-200 hover:bg-opacity-60 rounded"
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
                        <CardDescription className="text-gray-600 text-md mb-4">
                          {project.description}
                        </CardDescription>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex flex-wrap gap-3 min-h-20">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag.name}
                        variant="outline"
                        className="flex items-center gap-1 h-min text-blue-800 border bg-white"
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
                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
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
                      className="text-gray-600 hover:text-blue-600 hover:text-white flex items-center gap-1"
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
