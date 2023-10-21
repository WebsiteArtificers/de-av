"use client"
import './partners.css';
import { client, partners } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

type Partnership = {
    isSVG: boolean;
    logo: Image_2;
    company: string;
    url: string;
};

export default function Partners() {
  const [partnerships, setPartnerships] = useState<Partnership[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await client.fetch(partners);
        setPartnerships(result);
      } catch (error) {
        console.error('Error fetching the blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    controls.start({
      x: '-110%',
      transition: {
        duration: 50,
        repeat: Infinity,
        ease: 'linear',
      },
    });
  }, [controls]);

  return (
    <div className='partners__container'>
      <motion.div
        initial={{ x: '0%' }}
        animate={controls}
        className='partners__motion--container'
      >
        {[...partnerships, ...partnerships]?.map((partnership, index) => {
          if (partnership.isSVG) {
            return null;
          } else {
            return (
              <a key={index} href={partnership.url} target="_blank" rel="noopener noreferrer">
                <motion.img
                animate={{ opacity: 1 }} initial={{ opacity: 0 }}
                alt={partnership.company}
                key={index}
                src={urlForImage(partnership.logo).url()}
                />
              </a>
            );
          }
        })}
      </motion.div>
    </div>
  );
}