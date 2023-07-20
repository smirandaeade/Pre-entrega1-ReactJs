import CategoryNav from "./CategoryNav";
import Category from "../mocks/categories.json";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const Company = ({ activeMenu }) => {
    const [dataCompany, setDataCompany] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCompany = async () => {
            setLoading(true);
            try {
                // Simulación de una llamada a la API o carga de datos
                await new Promise((resolve) => setTimeout(resolve, 2000));
                const companyName = Category.companias.find(
                    (compania) => compania.nombre === activeMenu
                );
                setDataCompany(companyName);
                setError(null);
            } catch (error) {
                setError(error);
                setDataCompany(null);
            } finally {
                setLoading(false);
            }
        };

        getCompany();
    }, [activeMenu]);

    const handleAddToCart = (producto) => {
        // Lógica para añadir el producto al carrito
        console.log(`Añadir al carrito: ${producto.id}`);
    };

    const handleTitleBgColor = () => {
        if (activeMenu === 'PlayStation') {
            return 'bg-blue-700';
        } else if (activeMenu === 'Xbox') {
            return 'bg-lime-700';
        } else if (activeMenu === 'Nintendo Switch') {
            return 'bg-red-700';
        }
    };

    return (
        <div>
            <CategoryNav />

            <div className={`${handleTitleBgColor()}`}>
                <p className="text-center text-white">{activeMenu}</p>
            </div>

            {loading && (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}

            {error && (
                <div className="text-red-500 text-center mt-8">
                    Error al cargar los datos. Por favor, intenta nuevamente.
                </div>
            )}

            {!loading && !error && (!dataCompany || !dataCompany.categorias) && (
                <div className="text-center mt-8">
                    No se encontraron datos para la compañía seleccionada.
                </div>
            )}

            {!loading && !error && dataCompany && dataCompany.categorias && (
                <div className="flex flex-col">
                    <h1 className="text-xl text-center mt-8 mb-8">Todos los productos</h1>
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3 m-4 w-full">
                        {dataCompany.categorias.map((categoria) =>
                            categoria.productos.map((producto) => (
                                <div
                                    className="flex flex-col justify-between mx-auto w-72 card p-3 border-2 rounded-lg shadow-lg"
                                    key={producto.id}
                                >
                                    <div>
                                        <img className="m-auto" src={producto.imagen} alt={producto.nombre} />
                                        <h2>{producto.nombre}</h2>
                                        <p>{producto.descripcion}</p>
                                        <p>Precio: ${producto.precio}</p>
                                        {producto.oferta && <p>¡Oferta!</p>}
                                    </div>
                                    <div className="mt-7">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            onClick={() => handleAddToCart(producto)}
                                        >
                                            Añadir al carrito
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Company.propTypes = {
    activeMenu: PropTypes.string.isRequired,
};

export default Company;
