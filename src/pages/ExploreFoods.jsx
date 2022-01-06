import React from 'react';
import PropTypes from 'prop-types';
import { button } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchMealRandom } from '../services/mealAPI';

function ExploreMeals(props) {
  function redirectTo(path) {
    const { history } = props;
    history.push(path);
  }
  async function getMealRandom() {
    const mealArray = await fetchMealRandom();
    const { idMeal } = mealArray[0];
    redirectTo(`/comidas/${idMeal}`);
  }
  return (
    <div>
      <Header pageTitle="Explorar Comidas" />
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => redirectTo('/explorar/comidas/ingredientes') }
      >
        Por Ingredientes
      </button>

      <button
        type="button"
        onClick={ () => redirectTo('/explorar/comidas/area') }
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button>

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => getMealRandom() }
      >
        Me Surpreenda!

      </button>
      <Footer />
    </div>
  );
}

ExploreMeals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default ExploreMeals;
