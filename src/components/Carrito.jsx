import { FaShoppingCart } from 'react-icons/fa';

const Carrito = () => {
    return (
        <div className=" text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center ">
            <a className="flex items-center" href="#">
                <p className='mr-1'>Carrito</p>
                <FaShoppingCart className="text-gray-600" />
                <span className='ml-2'>(1)</span>
            </a>
        </div>
    )
}

export default Carrito