import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

//Todo lo que esta dentro del Router pero por fuera del Switch, se replica en todas las paginas
function App() {
  return (
    <Router>
      <Header />

      <div className='container mt-5'>
        <Switch>                 
          <Route exact path='/' component={Productos} />
          <Route exact path='/productos/nuevo' component={NuevoProducto} />
          <Route exact path='/productos/editar/:id' component={EditarProducto} />
        </Switch>
      </div>
    </Router>         
  );
}

export default App;
