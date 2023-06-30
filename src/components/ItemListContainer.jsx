import { useEffect } from 'react';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import 'animate.css';

const ItemListContainer = () => {
    useEffect(() => {
        Swal.fire({
            title: '¡Bienvenidos a Console.play!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }, []);

    return (
        <>
            <Navbar/>
        </>
    );
};

export default ItemListContainer;
