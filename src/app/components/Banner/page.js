import React from 'react';
import { Box, Input, Button } from '@mui/material';
import hero from '../../../../public/images/hero-banner.png';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import Card from '../Card/page';

function BannerPage() {
  return (
    <>
      <Box className="bg-white p-8 md:p-12">
        <Box className="max-w-7xl mx-auto flex flex-col md:flex-row">
          <Box className="flex-1 md:pr-8">
            <Box className="max-w-[400px]">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Professional WordPress Themes & Website Templates for any project
              </h1>
              <h2 className="text-lg text-gray-600 mb-4">
                Discover thousands of easy-to-customize themes, templates & CMS products, made by world-class developers.
              </h2>
              <Box className="mb-5">
                <Button variant="contained" className="bg-green-500 text-white  w-[200px] ">
                  View
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className="flex-1 md:flex-shrink-2">
            <Image src={hero} alt="Picture of the author" width={500} height={300} className="rounded-md" />
          </Box>
        </Box>
      </Box>
      {/* --------------Card----------- */}
      <Box>
        <Card />
      </Box>
    </>
  );
}

export default BannerPage;


 {/* <Box style={styles.searchBox}>
                            <Box style={styles.searchInputContainer}>
                                <Input placeholder='Select' type='search' style={styles.input} />
                                <Button variant="outlined" color="primary" style={styles.searchButton}>
                                    Search
                                </Button>
                            </Box>
                        </Box> */}