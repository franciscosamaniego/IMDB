// imports
import React from 'react';
import Header from './Header';
import Footer from './footer';
import ItemSelector from './ItemSelector';
import { useState } from 'react';

import Form from './Form'

// function esconder() {
//   document.getElementById('formulario').hidden = useState()
// }


const App = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <div>
      <Header title='Notas'/>
      <ItemSelector/>
      <div class="text-center">
      <button class="btn-warning" onClick={e => setHidden(prev => !prev)}>Crear peliculas</button>
      </div>
      <div hidden={hidden}>
      <Form/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
