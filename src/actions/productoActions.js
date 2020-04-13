import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, 
         AGREGAR_PRODUCTO_ERROR
       } from '../types';

import ClienteAxios from '../config/axios';
import Swal from 'sweetalert2'

////funciones que modifican el state accedidas desde un componente y mediante un dispatch////
//El dispatch es el que siempre manda a ejecutar las funciones
//Creamos un nuevo producto
export function crearNuevoProductoAction( producto ){
    return async (dispatch) => {
        //console.log(producto);
        dispatch( agregarProducto() );

        try {
            //Insertamos el nuevo producto en la base de datos
            await ClienteAxios.post('/productos', producto);            
            //Si no hubo error en el insert, actualizamos el state
            dispatch( agregarProductoExito( producto ) )             
            //Agregamos una alerta del tipo success
            Swal.fire(
                'Correcto',
                'El producto se agrego correctamente',
                'success'
            )

        } catch(error) {
            console.log(error);
            //Si hubo error en el insert, actualizamos el state
            dispatch( agregarProductoError( true ) )
            //Agregamos una alerta del tipo error
            Swal.fire({
                title: 'Hubo un error',
                text: 'Hubo un error, intente nuevamente',
                icon: 'error'
            })
        }
    }
}

//Cada funcion agregada aca, debe estar tambien agregada en el reducer
//Agregamos un nuevo producto ingresado por el usuario desde el input
const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//Si el producto fue guardado con exito en la base da datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hubo un error al querer agregar un nuevo producto en la base de datos
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})