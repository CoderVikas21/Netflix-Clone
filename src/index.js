import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Accordion from 'react-bootstrap/Accordion';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <BrowserRouter>
      <Accordion>
      <App />
      </Accordion>
    </BrowserRouter>
    
  </>
);
