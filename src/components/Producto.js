import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'

//Actions de REDUX
import { borrarProductoAction, obtenerProductoEditarAction } from '../actions/productoActions';
import { useDispatch } from 'react-redux'

const Producto = ( { producto } ) => {
    //Extraemos los datos del producto
    const { nombre, precio, id } = producto;

    //useDispatch es para mandar a ejeucutar las acciones
    //Utilizamos useDispatch y nos devuelve una funcion (dispatch) que luego utilizara a otra funcion
    const dispatch = useDispatch();    
    //No utilizamos useSelector ya que no tenemos state al cual acceder
    //Habilitamos useHistory para habilitar la redireccion hacia Productos
    const history = useHistory();

    //Aca corfirmamos la eliminacion del producto en base a la solicitud del usuario
    const confirmarEliminarProducto = id => {

        //Consultamos al usuario si esta seguro de querer eliminar el producto
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto que se elimina es irrecuperable!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminarlo!!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                //Utilizamos dispatch para llamar a la funciones que tenemos en nuestros actions
                //Llamamos al action de productoActions...lo movemos dentro del if del resul de Swal
                dispatch( borrarProductoAction ( id ) )
            }
        })

        //dispatch( borrarProductoAction ( id) )...lo movemos dentro del if del result de Swal
    }

    //Funcion que nos permite seleccionar un id(producto) y redireccionarlo hacia EditarProducto
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditarAction ( producto) );
        //redireccionamos hacia EditarProducto
        history.push(`/productos/editar/${producto.id}`);
    }

    return (  
        <tr>
            <td>{nombre}</td>
            <td><span className='font-weight-bold'> $ {precio} </span></td>
            <td className='acciones'>
                <button
                    type='button' className='btn btn-primary mr-2'
                    onClick={() => redireccionarEdicion(producto)}
                    >Editar
                </button>
                <button type='button' className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                    >Eliminar
                </button>
            </td>
        </tr>
    );
}
 
export default Producto;

