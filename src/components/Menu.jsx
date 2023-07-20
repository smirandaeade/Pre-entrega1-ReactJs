import { useState } from 'react';
import SubMenu from './SubMenu';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Menu = ({ onMenuClick }) => {


    const [showSubMenu, setShowSubMenu] = useState(false);
    let [activeMenu2, setActiveMenu] = useState(null);

    const handleMouseOver = (menu) => {
        if (window.innerWidth < 768) {
            return;
        }
        setShowSubMenu(true);
        setActiveMenu(menu);

    };

    const handleMouseOut = () => {
        if (window.innerWidth < 768) {
            return;
        }
        setShowSubMenu(false);
        setActiveMenu(null);
    };

    const handleClick = (menu) => {

        onMenuClick(menu);
        console.log(activeMenu2)

        if (window.innerWidth >= 768) {
            return;
        }
        if (activeMenu2 === menu) {
            setShowSubMenu(!showSubMenu);
        } else {
            setShowSubMenu(true);
            setActiveMenu(menu);
        }


    };


    return (
        <>
            <Link to="/" className="md:h-full md:flex md:items-center">
                <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center">
                    <p>Inicio</p>
                </div>
            </Link>
            <Link to="/playstation"
                onMouseOver={() => handleMouseOver('PlayStation')}
                onMouseOut={handleMouseOut}
                onClick={() => handleClick('PlayStation')}
                className="md:h-full md:flex md:items-center"
            >
                <div
                    className="md:w-30 text-white bg-blue-800 hover:bg-blue-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center shadow"
                >
                    <p className="p-2">PlayStation</p>
                </div>
                {showSubMenu && activeMenu2 === 'PlayStation' && <SubMenu activeMenu={activeMenu2} />}
            </Link>

            <Link to="/xbox"
                onMouseOver={() => handleMouseOver('Xbox')}
                onMouseOut={handleMouseOut}
                onClick={() => handleClick('Xbox')}
                className="md:h-full md:flex md:items-center"
            >
                <div
                    className="md:w-20 text-white bg-lime-700 hover:bg-lime-600 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center"
                >
                    <p className="p-2 md:m-auto justify-center">Xbox</p>
                </div>
                {showSubMenu && activeMenu2 === 'Xbox' && <SubMenu activeMenu={activeMenu2} />}
            </Link>
            <Link to="/nintendo-switch"
                onMouseOver={() => handleMouseOver('Nintendo Switch')}
                onMouseOut={handleMouseOut}
                onClick={() => handleClick('Nintendo Switch')}
                className="w-30 md:h-full md:flex md:items-center"            >
                <div
                    className="md:w-auto md:w-30 text-white bg-red-700 hover:bg-red-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center"
                >
                    <p className="p-2">Nintendo Switch</p>
                </div>
                {showSubMenu && activeMenu2 === 'Nintendo Switch' && <SubMenu activeMenu={activeMenu2} />}
            </Link>
        </>
    );
};

Menu.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
};

export default Menu;