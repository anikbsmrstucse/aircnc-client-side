import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';

const Navbar = () => {
    return (
        <div className='fixed w-full z-10 bg-white shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex items-center justify-between gap-4 md:gap-0'>
                        <Logo></Logo>
                        <Search></Search>
                        <Menu></Menu>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;