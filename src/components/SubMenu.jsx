
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const SubMenu = ({activeMenu}) => {

    let subMenuColor = '';
    
    if (activeMenu === 'PlayStation') {
        subMenuColor = ('bg-blue-500');
    } else if (activeMenu === 'Xbox') {
        subMenuColor = ('bg-lime-500');
    } else if (activeMenu === 'Nintendo Switch') {
        subMenuColor = ('bg-red-500');
    }

    return (
        <div className={`md:absolute md:top-16 md:w-40 mb-2 rounded-2xl md:rounded-sm ${subMenuColor}`}>
            <ul className='p-3 text-white text-center'>
                <li className='mb-3 hover:text-gray-300'>
                    <Link>Consolas</Link>
                </li>
                <li className='mb-3 hover:text-gray-300'>
                    <Link>Juegos</Link>
                </li>
                <li className='hover:text-gray-300'>
                    <Link>Accesorios</Link>
                </li>
            </ul>
        </div>
    );
};
SubMenu.propTypes = {
    activeMenu: PropTypes.string.isRequired,
};
export default SubMenu;
