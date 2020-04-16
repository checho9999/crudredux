import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Actions de REDUX
import { editarProductoAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux'

const EditarProducto = () => {

    //Definimos el state del nuevo producto ingresado desde el input del usuario
    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: ''
    });

    //useDispatch es para mandar a ejeucutar las acciones
    //Utilizamos useDispatch y nos devuelve una funcion (dispatch) que luego utilizara a otra funcion
    const dispatch = useDispatch();
    //Habilitamos useHistory para habilitar la redireccion hacia Productos
    const history = useHistory();

    //useSelector es para acceder al state dentro del componente
    //const productos = useSelector( state => state ) //truco para ver todo el state
    const productoeditar = useSelector( state => state.productos.productoeditar );
    //console.log(productoeditar)

    //cuando se selecciona el producto a editar los datos de este se cargan automaticamente en el state
    useEffect(() => {        
        guardarProducto(productoeditar);
    },[productoeditar]);

     //Leemos los nuevos datos del usuario para poder editar los actuales
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    //Para evitar el error de que no hay ningun producto seleccionado en el state cuando iniciamos la edicion
    if(!producto) return null; 
    //Extramos los datos del producto a editar
    const { nombre, precio } = producto;

    //Cuando el usuario hace submit
    const submitEditarProducto = e => {
        //para que no se envie el query string en la parte superior, ni se recarge la pagina
        e.preventDefault();
        //Utilizamos dispatch para llamar a la funciones que tenemos en nuestros actions
        //Llamamos al action de productoActions
        //Le pasamos el producto editado al action
        dispatch ( editarProductoAction ( producto ) );
        //redireccionamos hacia Productos
        history.push('/');
    }

    return (  
        <div className='row justify-content-center mt-5'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center'>
                            Editar Producto
                        </h2>

                        <form
                            onSubmit={submitEditarProducto}
                        >
                            <div className='form-group'>
                                <label>Titulo</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Titulo'
                                    name='nombre'
                                    value={nombre}
                                    onChange={onChangeFormulario}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label>Precio del Producto</label>
                                <input 
                                    type='number' 
                                    className='form-control' 
                                    placeholder='Precio' 
                                    name='precio'
                                    value={precio}
                                    onChange={onChangeFormulario}
                                />
                            </div>

                            <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                                Guardar Cambios
                            </button>
                        </form>
 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditarProducto;