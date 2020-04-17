import React, { useState } from 'react';

//Actions de REDUX
import { crearNuevoProductoAction } from '../actions/productoActions';
import { useDispatch, useSelector } from 'react-redux'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

//Accedemos al history a traves del Router de react-router-dom(el componente esta dentro del Router)
const NuevoProducto = ( { history } ) => {

    //Definimos el state del nuevo producto ingresado desde el input del usuario
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //useDispatch es para mandar a ejeucutar las acciones
    //Utilizamos useDispatch y nos devuelve una funcion (dispatch) que luego utilizara a otra funcion
    const dispatch = useDispatch();

    //useSelector es para acceder al state dentro del componente
    //const cargando = useSelector( state => state ) //truco para ver todo el state
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state => state.alerta.alerta );
    //console.log(cargando + " " + error);

    //Utilizamos dispatch para llamar a la funciones que tenemos en nuestros actions
    //Llamamos al action de productoActions
    const agregarProducto = ( producto ) => { dispatch( crearNuevoProductoAction( producto ) ) }
        
    //Cuando el usuario hace submit
    const submitNuevoProducto = e => {
        //para que no se envie el query string en la parte superior, ni se recarge la pagina
        e.preventDefault();

        //validando el nombre y el precio del input
        if (nombre.trim() === '' || precio <= 0){
            //Si hubo error en la validacion, pasamos el mensaje y las clases de estilo a la alerta
            const alerta = {
                msg: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            //llamamos a la alerta
            dispatch ( mostrarAlertaAction( alerta ) );

            return;
        }

        //Si no hubo error en la validacion, ocultamos la alerta
        dispatch ( ocultarAlertaAction() );

        //Creamos el nuevo producto validado
        agregarProducto({
            nombre,
            precio
        });
        
        //Redireccionamos hacia el Productos
        history.push('/');
    }
    
    return(
        <div className='row justify-content-center mt-5'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>
                        { alerta ? <p className={alerta.classes}> {alerta.msg}</p> : null }
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className='form-group'>
                                <label>Nombre Producto</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Nombre Producto' 
                                    name='nombre'
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>

                            <div className='form-group'>
                                <label>Precio</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Precio' 
                                    name='precio'
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>

                            <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                                Agregar
                            </button>
                        </form>
                        { cargando ? <p className='text-center'>Cargando...</p> : null }
                        { error ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un error...</p>: null }   
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NuevoProducto;

