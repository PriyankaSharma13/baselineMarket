import { Box, Typography, Link } from '@mui/material';
import React from 'react';

function FooterPage() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <Box className="bg-gray-800 py-8">
    <Box className="container mx-auto flex flex-wrap justify-between items-center max-w-[1250px] px-4">
      <Box className="mb-8 w-full md:w-[20%]">
        <Typography variant="h3" className="text-white text-lg font-bold mb-2">
          Baseline Marketing
        </Typography>
        <Box className="flex flex-col">
          <Link href="#" style={linkStyle} className="text-white mb-2">
            Terms
          </Link>
          <Link href="#" style={linkStyle} className="text-white mb-2">
            Licenses
          </Link>
          <Link href="#" style={linkStyle} className="text-white mb-2">
            Market API
          </Link>
        </Box>
      </Box>

        <Box className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <Typography variant="h3" className="text-white text-lg font-bold mb-2">
            Help
          </Typography>
          <Box className="flex flex-col">
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Help Center
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Authors
            </Link>
          </Box>
        </Box>

        <Box className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <Typography variant="h3" className="text-white text-lg font-bold mb-2">
            Our Community
          </Typography>
          <Box className="flex flex-col">
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Community
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Blog
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Meetups
            </Link>
          </Box>
        </Box>

        <Box className="w-full md:w-1/3 lg:w-1/6 mb-4 md:mb-0">
          <Typography variant="h3" className="text-white text-lg font-bold mb-2">
            Meet Baseline
          </Typography>
          <Box className="flex flex-col">
            <Link href="#" style={linkStyle} className="text-white mb-2">
              About
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Careers
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Privacy Policy
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              Sitemap
            </Link>
          </Box>
        </Box>

        <Box className="mb-8 md:w-[20%]">
          <Typography variant="h3" className="text-white text-lg font-bold mb-2">
            Baseline Marketing
          </Typography>
          <Box className="flex flex-col">
            <Link href="#" style={linkStyle} className="text-white mb-2">
              74,580,205
            </Link>
            <Link href="#" style={linkStyle} className="text-white mb-2">
              $1,145,236,934
            </Link>
          </Box>
        </Box>
        <Box className="w-full border-t-2 border-gray-600 mt-4 md:hidden"></Box>
      </Box>
    </Box>
  );
}

export default FooterPage;
