import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* a gente importou esse App de dentro de outro arquivo. isso aqui se chama jsx (x de xml) usar html dentro do javascript */}

    {/* tudo e feito em compomente no React */}
  </React.StrictMode>,
  document.getElementById('root')
);
