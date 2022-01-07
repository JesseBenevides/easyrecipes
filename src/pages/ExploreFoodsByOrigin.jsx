import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RecipesContext from '../context/RecipesContext';
import { fetchMealAreas, fetchMealsByArea } from '../services/mealAPI';
import useAPI from '../hooks/useAPI';
import RecipeCard from '../components/RecipeCard';

function ExploreFoodsByOrigin() {
  const { recipes: { foodList, setFoodList } } = useContext(RecipesContext);
  const [mealAreas, setMealAreas] = useState([]);

  const INICIAL_FOODLIST_LENGTH = 12;
  useAPI(fetchMealAreas, setMealAreas, '');
  useAPI(fetchMealsByArea, setFoodList, 'canadian');

  const renderDropdownAreas = () => (
    <select data-testid="explore-by-area-dropdown">
      <option data-testid="All-option">All</option>
      {mealAreas.map(({ strArea }) => (
        <option
          key={ strArea }
          value={ strArea }
          data-testid={ `${strArea}-option` }
        >
          { strArea }
        </option>
      ))}
    </select>
  );

  const renderFoodCard = () => (
    foodList.slice(0, INICIAL_FOODLIST_LENGTH)
      .map((recipe, index) => (
        <RecipeCard
          key={ recipe.idMeal }
          id={ recipe.idMeal }
          name={ recipe.strMeal }
          image={ recipe.strMealThumb }
          index={ index }
          type="comidas"
        />
      ))
  );

  return (
    <>
      <Header pageTitle="Explorar Origem" hasSearch />
      <section>
        { renderDropdownAreas() }
        { renderFoodCard() }
      </section>
      <Footer />
    </>
  );
}

export default ExploreFoodsByOrigin;
