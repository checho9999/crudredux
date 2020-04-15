import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

//Actions de REDUX
import { obtenerProductosAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux'

const Productos = () => {

    //useDispatch es para mandar a ejeucutar las acciones
    //Utilizamos useDispatch y nos devuelve una funcion (dispatch) que luego utilizara a otra funcion
    const dispatch = useDispatch();

    //Consultamos a la API cuando se carga el componente o cada vez que hay alguna actualizacion
    useEffect(() => {        
        const cargarProductos = () => dispatch ( obtenerProductosAction() );
        cargarProductos();
        // eslint-disable-next-line
    }, []);

    //useSelector es para acceder al state dentro del componente
    //const productos = useSelector( state => state ) //truco para ver todo el state
    const productos = useSelector( state => state.productos.productos );  
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    //console.log(productos);
    //productos.map(producto => console.log(producto.id));
    return (       
        <Fragment>
            <h2 className='text-center my-5'>Listado de Productos</h2>
            { cargando ? <p className='text-center'>Cargando...</p> : null }
            { error ? <p className='font-weigth-bold alert alert-danger text-center mt-4'>Hubo un error...</p>: null } 
            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>   
                </thead>
                <tbody> 
                    {productos.length === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}
 
export default Productos;