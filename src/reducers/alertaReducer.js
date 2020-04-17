import { MOSTRAR_ALERTA, OCULTAR_ALERTA
       } from '../types';

//Cada reducer tiene su propio state
const initialState = {
    alerta: null
}

//action.payload es el que modifica el state y action.type describe lo que hacemos en la app
export default function(state = initialState, action){
    switch(action.type){
        case MOSTRAR_ALERTA:
            return{
                ...state,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return{
                ...state,
                alerta: null
            }            
        default:
            return state;
    }
}