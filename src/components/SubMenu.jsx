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
        <div className={`absolute top-16 p-10 pl-5 ${subMenuColor}`}>
            <ul>
                <li>
                    <a href="#">Consolas</a>
                </li>
                <li>
                    <a href="#">Juegos</a>
                </li>
                <li>
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
