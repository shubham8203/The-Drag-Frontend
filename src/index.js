import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import  DragContext  from './Context/Dragcontext.js';
import brands from './assets/brands.js';
import creators from './assets/creators.js';
import communities from './assets/communities.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DragContext.Provider value={{brands,creators,communities}} >
     <App />
    </DragContext.Provider>
   
  </React.StrictMode>
);


