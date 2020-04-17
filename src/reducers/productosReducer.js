import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, 
         AGREGAR_PRODUCTO_ERROR, COMENZAR_DESCARGA_PRODUCTO, 
         DESCARGA_PRODUCTO_EXITO, DESCARGA_PRODUCTO_ERROR,
         OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, 
         PRODUCTO_ELIMINADO_ERROR, OBTENER_PRODUCTO_EDITAR,
         COMENZAR_EDICION_PRODUCTO, PRODUCTO_EDITADO_EXITO, 
         PRODUCTO_EDITADO_ERROR
       } from '../types';

//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

//action.payload es el que modifica el state y action.type describe lo que hacemos en la app
export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
        case COMENZAR_DESCARGA_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]

            }
        case AGREGAR_PRODUCTO_ERROR:
        case DESCARGA_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,                
                error: null,
                productos: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return{
                ...state,
                productoeliminar: action.payload
            }     
        case PRODUCTO_ELIMINADO_EXITO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }
        case COMENZAR_EDICION_PRODUCTO:
            return state;             
        case OBTENER_PRODUCTO_EDITAR:
            return{
                ...state,
                productoeditar: action.payload
            }        
         case PRODUCTO_EDITADO_EXITO:
            return{
                ...state,
                productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto),
                productoeditar: null
            }              
        default:
            return state;
    }
}
