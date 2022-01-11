import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const history = useHistory();
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setEmail(JSON.parse(localStorage.getItem('user')).email);
    }
  }, []);

  const handleFavoriteClick = () => {
    history.push('/receitas-favoritas');
  };

  const handleDoneClick = () => {
    history.push('/receitas-feitas');
  };

  const handleClicLogout = () => {
    history.push('/');
    localStorage.clear();
  };

  return (
    <div>
      <Header pageTitle="Perfil" />
      <div className="d-flex flex-column align-items-center">
        <h2 className="mb-2 mt-4" data-testid="profile-email">{ email }</h2>
        <Button
          className="w-75 mb-2 mt-4"
          size="lg"
          variant="secondary"
          data-testid="profile-done-btn"
          onClick={ handleDoneClick }
        >
          Receitas Feitas
        </Button>
        <Button
          className="w-75 mb-2"
          size="lg"
          variant="secondary"
          data-testid="profile-favorite-btn"
          onClick={ handleFavoriteClick }
        >
          Receitas Favoritas
        </Button>
        <Button
          className="w-75 mb-2"
          size="lg"
          variant="secondary"
          data-testid="profile-logout-btn"
          onClick={ handleClicLogout }
        >
          Sair
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
