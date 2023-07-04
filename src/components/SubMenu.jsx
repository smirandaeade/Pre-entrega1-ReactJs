import PropTypes from 'prop-types';
const SubMenu = ({activeMenu}) => {

    let subMenuColor = '';
    
    if (activeMenu === 'PlayStation') {
        subMenuColor = ('bg-blue-400');
    } else if (activeMenu === 'Xbox') {
        subMenuColor = ('bg-lime-700');
    } else if (activeMenu === 'Nintendo Switch') {
        subMenuColor = ('bg-red-700');
    }

    return (
        <div className={`absolute top-16 w-32 ${subMenuColor}`}>
            <ul className='p-3'>
                <li className='mb-3'>
                    <a href="#">Consolas</a>
                </li>
                <li className='mb-3'>
                    <a href="#">Juegos</a>
                </li>
                <li className='mb-3'>
                    <a href="#">Accesorios</a>
                </li>
            </ul>
        </div>
    );
};
SubMenu.propTypes = {
    activeMenu: PropTypes.string.isRequired,
};
export default SubMenu;
