import { AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, 
         AGREGAR_PRODUCTO_ERROR
       } from '../types';

//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false
}

//action.payload es el que modifica el state y action.type describe lo que hacemos en la app
export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
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
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
