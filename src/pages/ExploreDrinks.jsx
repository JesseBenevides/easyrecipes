import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchDrinkRandom } from '../services/cocktailAPI';

function ExploreDrinks(props) {
  function redirectTo(path) {
    const { history } = props;
    history.push(path);
  }
  async function getDrinkRandom() {
    const drinkArray = await fetchDrinkRandom();
    const { idDrink } = drinkArray[0];
    redirectTo(`/bebidas/${idDrink}`);
  }
  return (
    <div>
      <Header pageTitle="Explorar" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => redirectTo('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => getDrinkRandom() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

ExploreDrinks.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default ExploreDrinks;
