'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const t = useTranslations('Navigation');

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('portfolio'), path: '/portfolio' },
    { name: t('certifications'), path: '/certifications' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Ernesto Avilés
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden lg:flex space-x-6 text-2xl">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="relative">
                  {item.path === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-blue-400"
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <LocaleSwitcher />
            </li>
          </ul>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-4"
          >
            <ul className="flex flex-col space-y-4 text-2xl">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="block" onClick={toggleMenu}>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <LocaleSwitcher />
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
