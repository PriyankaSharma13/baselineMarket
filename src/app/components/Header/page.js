"use client"
import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import BannerPage from '../Banner/page';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography, Box } from '@mui/material';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <header className="header-container">
                <Box className="header-top bg-gray-800 p-8 ">
                    <nav className="container mx-auto my-0">
                        <Box className="top-nav flex justify-between items-center mb-4">
                            {/* {showLogo ? (
                                <Box className="logo text-white">
                                    <Typography>BaselineMarket</Typography>
                                </Box>
                            ) : (
                                <Box className="menu-icon text-white md:hidden" onClick={toggleMenu}>
                                    <MenuIcon />
                                </Box>
                            )} */}
                             <Box className="logo text-white">
                                    <Typography>BaselineMarket</Typography>
                                </Box>


                            <Box className="first-nav hidden md:flex ">
                                <ul className="nav-list flex gap-6 text-white ">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/">Start Selling</Link></li>
                                    <li><Link href="/">Our Products</Link></li>
                                </ul>
                            </Box>
                            <Box className='nav-cart  text-white flex gap-5' >
                                <ShoppingCartIcon />
                                <h1>Sign in</h1>
                            </Box>



                        </Box>
                        <Box className={"center-nav" }>
                            <ul className="nav-list flex gap-4 text-white md:flex-wrap md:gap-5">
                                <li><Link href="/">Web Themes & Template</Link></li>
                                <li><Link href="/">Code</Link></li>
                                <li><Link href="/">Video </Link></li>
                                <li><Link href="/">Audio </Link></li>
                                <li><Link href="/">Graphics </Link></li>
                                <li><Link href="/">Photos </Link></li>
                                <li><Link href="/">3D Files</Link></li>
                                <li><Link href="/">Unlimited Download</Link></li>
                            </ul>
                        </Box>
                    </nav>
                </Box >
                <nav className={"bg-white"}>
                    <Box className="bottom-nav container mx-auto p-2 md:flex md:justify-between">
                        <ul className="nav-list flex gap-4 text-gray md:flex-wrap md:gap-5">
                            <li><Link href="/">All items</Link></li>
                            <li><Link href="/">HTML</Link></li>
                            <li><Link href="/">WordPress</Link></li>
                            <li><Link href="/">Hosting</Link></li>
                            <li><Link href="/">Shopify</Link></li>
                            <li><Link href="/">Jamstack</Link></li>
                            <li><Link href="/">Marketing</Link></li>
                            <li><Link href="/">More</Link></li>
                        </ul>
                    </Box>
                </nav>
            </header >
            <Box>
                <BannerPage />
            </Box>
        </>

    );
}






