import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

//REDUX 
import { Provider } from 'react-redux';
import store from './store'

//Todo lo que esta dentro del Router pero por fuera del Switch, se replica en todas las paginas
//Los datos fluyen desde el Provider utilizando el store, que es el que tiene todo el state de la app
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className='container mt-5'>
          <Switch>                 
            <Route exact path='/' component={Productos} />
            <Route exact path='/productos/nuevo' component={NuevoProducto} />
            <Route exact path='/productos/editar/:id' component={EditarProducto} />
          </Switch>
        </div>
      </Provider>  
    </Router>         
  );
}

export default App;
