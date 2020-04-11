import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'; //es el index, pero no requiere que se declare

//Solo hay un store por app y solo hay un reducer(si hay mas de uno combineReducers los unifica)
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk),
        //Esta validacion es para que la app funcione independientemente de si tenemos REDUX DEVTOOLS o no
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
)
 
export default store;