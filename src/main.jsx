import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BuscadorPeliculas  from './BuscadorPeliculas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/buscador.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BuscadorPeliculas />
  </StrictMode>,
)
