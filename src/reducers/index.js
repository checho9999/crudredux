//combineReducers permite que se combinen mas de un reducer, ya que al final siempre deben unificarse en uno solo
import { combineReducers } from 'redux';
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});