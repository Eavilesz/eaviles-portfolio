'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Certifications', path: '/certifications' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6">
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
        </ul>
      </div>
    </nav>
  );
}
