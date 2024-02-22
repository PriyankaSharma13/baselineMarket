import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import hero from '../../../../public/images/hero-banner.png';
import Link from 'next/link';
import FooterPage from '../Footer/page';

const cardData = [
  {
    id: 1,
    title: 'WordPress Themes',
    desc: 'Thousands of WordPress themes',
    img: hero,
  },
  {
    id: 2,
    title: 'Commerce Templates',
    desc: 'Beautiful website templates',
    img: hero,
  },
  {
    id: 3,
    title: 'Sites Templates',
    desc: 'HTML and website templates',
    img: hero,
  },
  {
    id: 4,
    title: 'Marketing Templates',
    desc: 'Email, newsletter and landing page templates.',
    img: hero,
  },
  {
    id: 5,
    title: 'Blogger',
    desc: 'Blogger templates and themes',
    img: hero,
  },
  {
    id: 6,
    title: 'CMS Templates',
    desc: 'Over 1,700 CMS website templates',
    img: hero,
  },
];

function Card() {
  return (
    <>
      <Box className="bg-white p-4 md:p-8">
        <Box className="max-w-7xl mx-auto flex flex-wrap">
          {cardData.map((card) => (
            <Box key={card.id} className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
              <Box className="bg-white rounded-md border border-gray-300 overflow-hidden">
                <Link href="#">
                  <h5 className="text-xl font-bold text-gray-700 p-2">{card.title}</h5>
                </Link>
                <Box className="p-2">
                  <p className="text-gray-600">{card.desc}</p>
                </Box>
                <Box className="relative">
                  <Link href="/">
                    <Image src={card.img} alt="Card Image" className="w-full" />
                  </Link>
                </Box>
                
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      {/* ---------Footer--------- */}
      <Box>
        <FooterPage />
      </Box>
    </>
  );
}

export default Card;
