import { useState } from 'react';
import Carrito from './Carrito';
import Menu from './Menu';
import Hamburguer from './Hamburguer';
import Logo from './Logo';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleHamburguerClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-white shadow static md:sticky">
            <div className="max-w-7x7 px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    <div className="md:flex items-center hidden lg:w-auto lg:mr-56 xl:mr-96 h-full">
                        <Menu />
                    </div>
                    <div className="hidden md:block">
                        <Carrito />
                    </div>
                    <div onClick={handleHamburguerClick} className="z-50 focus:outline-none md:hidden">
                        <Hamburguer />
                    </div>
                </div>
            </div>

            <div className={`${showMenu ? "block" : "hidden"} flex flex-col w-full md:hidden fixed top-auto -z-10 px-8 py-8 bg-white h-full`}>


                <div className='block w-[25rem] m-auto mt-0'>
                    <Menu />
                    <Carrito />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
