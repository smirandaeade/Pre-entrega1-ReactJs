import { useState } from 'react';
import SubMenu from './SubMenu';

const Menu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);

    const handleSubMenuClick = (menu) => {
        if (activeMenu === menu) {
            // Si se hace clic en el mismo menú, simplemente se cierra el submenú actual
            setShowSubMenu(false);
            setActiveMenu(null);
        } else {
            // Si se hace clic en un menú diferente, se actualiza el submenú y el menú activos
            setShowSubMenu(true);
            setActiveMenu(menu);
        }
    };

    return (
        <>
            <a
                className="md:h-full md:flex md:items-center"
                href="#"
            >
                <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center">
                    <p>Inicio</p>
                </div>
            </a>
            <a
                onClick={() => handleSubMenuClick('PlayStation')}
                className="md:h-full md:flex md:items-center"
                href="#"
            >
                <div className="md:w-30 text-white bg-blue-800 hover:bg-blue-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center shadow">
                    <p className="p-2">PlayStation</p>
                </div>
                {showSubMenu && activeMenu === 'PlayStation' && <SubMenu activeMenu={activeMenu} />}
            </a>

            <a
                onClick={() => handleSubMenuClick('Xbox')}
                className="md:h-full md:flex md:items-center"
                href="#"
            >
                <div className="md:w-20 text-white bg-lime-700 hover:bg-lime-600 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                    <p className="p-2 md:m-auto justify-center">Xbox</p>
                </div>
                {showSubMenu && activeMenu === 'Xbox' && <SubMenu activeMenu={activeMenu} />}
            </a>
            <a
                onClick={() => handleSubMenuClick('Nintendo Switch')}
                className="w-30 md:h-full md:flex md:items-center"
                href="#"
            >
                <div className="md:w-auto md:w-30 text-white bg-red-700 hover:bg-red-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                    <p className="p-2">Nintendo Switch</p>
                </div>
                {showSubMenu && activeMenu === 'Nintendo Switch' && <SubMenu activeMenu={activeMenu} />}
            </a>
        </>
    );
};

export default Menu;
