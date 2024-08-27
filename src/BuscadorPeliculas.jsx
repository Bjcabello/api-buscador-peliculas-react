import { useState } from 'react';

const BuscadorPeliculas = () => {
  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  const urlBase = 'https://api.themoviedb.org/3/search/movie';
  const API_KEY = 'e262e78105e9c1f83d68522ac1d8db89';

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPeliculas();
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`);
      const data = await response.json();
      setPeliculas(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="title text-center fixed">Buscador de Peliculas</h1>
      <form onSubmit={handleSubmit} className="d-flex mb-4">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escribí una película"
          value={busqueda}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary search-button">Buscar</button>
      </form>
      <div className="row">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="col-md-4 mb-4 movie-item">
            <div className="card h-100">
              {pelicula.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  className="card-img-top"
                  alt={pelicula.title}
                />
              ) : (
                <div
                  className="card-img-top d-flex align-items-center justify-content-center bg-secondary text-white"
                  style={{ height: '300px' }}
                >
                  No Image
                </div>
              )}
              <div className="card-body">
                <h5 className="card-title text-center">{pelicula.title}</h5>
                <p className="card-text text-justify">{pelicula.overview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuscadorPeliculas;