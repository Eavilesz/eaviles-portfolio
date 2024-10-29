'use client';

import PortfolioSection from '@/components/portfolioSection';
import { getPortfolioProjects, getPortfolioExperience } from '@/lib/utils';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('Portfolio');
  const projects = getPortfolioProjects(t);
  const experience = getPortfolioExperience(t);

  return (
    <main className="container mx-auto px-4 py-12 min-h-screen flex flex-col gap-10">
      <PortfolioSection portfolioObj={experience} />
      <PortfolioSection portfolioObj={projects} />
    </main>
  );
}
