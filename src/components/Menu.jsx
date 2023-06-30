
const Menu = () => {
    return (
        <>
            <a className="md:h-full md:flex md:items-center" href="#">
                <div className="text-gray-600 hover:text-gray-800 px-2 py-2 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none shadow-xl drop-shadow-2xl md:shadow-none justify-center ">
                    <p>Inicio</p>
                </div>
            </a>
            <a className="md:h-full md:flex md:items-center" href="#">
                <div className="md:w-30 text-white bg-blue-800 hover:bg-blue-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center shadow">
                    <p className='p-2'>PlayStation</p>
                </div>
            </a>
            <a className="md:h-full md:flex md:items-center" href="#">
                <div className="md:w-20 text-white bg-lime-700 hover:bg-lime-600 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                    <p className='p-2 md:m-auto justify-center'>Xbox</p>
                </div>
            </a>
            <a className="md:h-full md:flex md:items-center" href="#">
                <div className="text-white bg-red-700 hover:bg-red-500 md:h-full items-center flex rounded-full mb-2 md:mb-0 md:rounded-none justify-center">
                    <p className='p-2'>Nintendo Switch</p>
                </div>
            </a>
        </>
    )
}

export default Menu