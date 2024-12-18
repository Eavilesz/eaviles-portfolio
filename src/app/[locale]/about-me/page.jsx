'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import musicLab from '@/assets/music-lab.jpg';
import yaku from '@/assets/yaku.jpg';
import touchProjector from '@/assets/touch-projector.avif';
import mern from '@/assets/mern.avif';
import jelou from '@/assets/jelou.avif';
import twilio from '@/assets/twilio.avif';
import { useTranslations } from 'next-intl';

export default function AboutMe() {
  const t = useTranslations('AboutMe');

  const timelineEvents = [
    {
      year: 2018,
      title: t('firstTitle'),
      description: t('firstDescription'),
      imageDescription: t('firstImageDescription'),
      image: musicLab,
      priority: true,
    },
    {
      year: 2019,
      title: t('secondTitle'),
      description: t('secondDescription'),
      imageDescription: t('secondImageDescription'),
      image: yaku,
    },
    {
      year: 2020,
      title: t('thirdTitle'),
      description: t('thirdDescription'),
      imageDescription: t('thirdImageDescription'),
      image: touchProjector,
    },
    {
      year: 2021,
      title: t('fourthTitle'),
      description: t('fourthDescription'),
      imageDescription: t('fourthImageDescription'),
      image: mern,
    },
    {
      year: 2022,
      title: t('fifthTitle'),
      description: t('fifthDescription'),
      imageDescription: t('fifthImageDescription'),
      image: jelou,
    },
    {
      year: '2022 - 2024',
      title: t('sixthTitle'),
      description: t('sixthDescription'),
      imageDescription: t('sixthImageDescription'),
      image: twilio,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 text-center">
            {t('journeyDescription')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              className={`mb-24 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex relative">
                {/* Circle */}
                <div
                  className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full shadow-lg z-10"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '1px' }}
                ></div>
                <motion.div
                  className="bg-white p-6 rounded-lg shadow-lg h-fit text-gray-800 my-auto w-full"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h2 className="text-2xl font-bold mb-2 text-blue-600">
                    {event.year}
                  </h2>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                </motion.div>
              </div>
              <div className="w-full md:w-1/2 px-4 flex flex-col justify-center items-center">
                <motion.div
                  className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={event.priority}
                  />
                </motion.div>
                <p className="text-sm text-gray-500 text-center italic">
                  {event.imageDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
