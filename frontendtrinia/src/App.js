// imports
import React from 'react';
import Header from './Header';
import Footer from './footer';
import ItemSelector from './ItemSelector';

import Form from './Form'

const App = () => {
  return (
    <div>
      <Header title='Notas'/>
      <ItemSelector/>
      <div class="text-center">
      <button class="btn-warning" >Crear pelicula</button>
      </div>
      <Form/>
      <Footer />
    </div>
  );
};

export default App;
