import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/mealIcon.svg';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Explorer() {
  return (
    <>
      <Header pageTitle="Explorar" />
      <div>
        <Link src={ drinkIcon } to="explorar/bebidas" data-testid="explore-drinks">
          Explorar Bebidas
        </Link>

        <Link src={ exploreIcon } to="/explorar/comidas" data-testid="explore-food">
          Explorar Comidas
        </Link>

      </div>
      <Footer />
    </>
  );
}

export default Explorer;
