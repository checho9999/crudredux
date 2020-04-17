import { MOSTRAR_ALERTA, OCULTAR_ALERTA
       } from '../types';

////funciones que modifican el state accedidas desde un componente y mediante un dispatch////
//El dispatch es el que siempre manda a ejecutar las funciones
//Iniciamos la llamada a la alerta para habilitarla
export function mostrarAlertaAction( alerta ){
    return async (dispatch) => {
        dispatch( mostrarAlerta( alerta ) );
    }
}

//Cada funcion agregada aca, debe estar tambien agregada en el reducer
//Mostramos la alerta
const mostrarAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})

//Iniciamos la llamada a la alerta para deshabilitarla
export function ocultarAlertaAction( alerta ){
    return async (dispatch) => {
        dispatch( ocultarAlerta( alerta ) );
    }
}

//Ocultamos la alerta
const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})