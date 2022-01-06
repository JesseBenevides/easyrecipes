import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
      <p data-testid="profile-email">{ email }</p>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ handleDoneClick }
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ handleFavoriteClick }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleClicLogout }
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
