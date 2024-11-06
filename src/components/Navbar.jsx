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
    { name: t('aboutMe'), path: '/about-me' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-gray-800 py-4 z-50 h-16 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Ernesto Avilés
          </Link>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-gray-600 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden lg:flex space-x-6 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="relative text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.path === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-blue-600"
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
            className="lg:hidden mt-4 bg-white"
          >
            <ul className="flex flex-col space-y-4 text-lg p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={toggleMenu}
                  >
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
