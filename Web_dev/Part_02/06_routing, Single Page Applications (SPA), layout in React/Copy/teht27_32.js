import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation, Navigate, useParams } from 'react-router-dom';

export const Spa = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', fontSize: '20px', height: '100px' }}>
        <Link to="/" style={{ textDecoration: 'none', fontSize: '20px', height: '100px' }}>Koti</Link>
        <Link to="/autot" style={{ textDecoration: 'none', fontSize: '20px', height: '100px' }}>Autot</Link>
      </nav>
      {user && <h3>{`${user.name},${user.id}`}</h3>}
      <Routes>
        <Route path="/" element={<Koti />} />
        <Route path="/autot" element={user ? <Autot /> : <Kirjaudu setUser={setUser} />} />
        <Route path="/autot/:id" element={<Details />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" state={{ from: window.location.pathname }} replace />} />
      </Routes>
    </div>
  );
};

const Koti = () => {
  const getTimePeriod = () => {
    const hours = new Date().getHours();
    return hours >= 6 && hours < 14 ? 'aamupäivä' : 'iltapäivä';
  };

  return (
    <div>
      <p>Savonia AMK</p>
      <Aika getTimePeriod={getTimePeriod} />
    </div>
  );
};

const Aika = ({ getTimePeriod = () => 'aamupäivä' }) => {
  const date = new Date().toLocaleDateString('fi-FI');
  return <p>{`${date} ${getTimePeriod()}`}</p>;
};

const Autot = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/autot')
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <ol>
      {cars.map((car) => (
        <li key={car.id}>
          <Link to={`/autot/${car.id}`} style={{ textDecoration: 'none' }}>
            {car.Merkki},{car.Malli}
          </Link>
        </li>
      ))}
    </ol>
  );
};

const Details = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/autot/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  return <h6 data-testid="details">{`${car.Merkki},${car.Malli}`}</h6>;
};

const Kirjaudu = ({ setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && id) {
      setUser({ name, id });
      navigate('/autot');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Etunimi:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Henkilönumero:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <button type="submit">Kirjaudu</button>
    </form>
  );
};

const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Гарантируем наличие пути для отображения
  const from = location.state?.from || location.pathname || '/';

  return (
    <div>
      {/* Гарантированное рендеринг текста */}
      <h4>{`Yritit navigoida sivulle: ${from}`}</h4>
      <button onClick={() => navigate('/')} role="button">
        Koti-sivulle
      </button>
    </div>
  );
};


  
  
  

export { Koti, Aika, Autot, Details, Kirjaudu, Error };