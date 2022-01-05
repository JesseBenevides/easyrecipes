import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <Header pageTitle="Explorar" />
      <Link to="/explorar/bebidas/ingredientes" data-testid="explore-by-ingredient">
        Por Ingredientes
      </Link>

      <Link to="/explorar/comidas" data-testid="explore-surprise">
        Me Surpreenda!
      </Link>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
