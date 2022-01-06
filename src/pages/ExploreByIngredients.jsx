import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import IngredientCard from '../components/IngredientCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import genericApi from '../services/genericApi';

function ExploreByIngredients() {
  const { recipes } = useContext(RecipesContext);

  const {
    setRecipeIngredients,
  } = recipes;
  const [ingredientsMeals, setIngredientesMeals] = useState();
  const [ingredientsDrinks, setIngredientsDrinks] = useState();
  const history = useHistory();
  const { location: { pathname } } = useHistory();
  const INGREDIENTS_MEALS = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
  const URL_INGREDIENTS_DRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
  const validation = ingredientsDrinks || ingredientsMeals;

  async function setRecipeMeal(ingredient) {
    const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const { meals } = await genericApi(URL);
    setRecipeIngredients(meals);
    history.push('/comidas');
  }

  async function setRecipeDrink(ingredient) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const { drinks } = await genericApi(URL);
    setRecipeIngredients(drinks);
    history.push('/bebidas');
  }

  useEffect(() => {
    async function getAllIngredients() {
      if (pathname.includes('/explorar/comidas')) {
        const response = await genericApi(INGREDIENTS_MEALS);
        setIngredientesMeals(response.meals);
      }
      if (pathname.includes('/explorar/bebidas')) {
        const response = await genericApi(URL_INGREDIENTS_DRINKS);
        setIngredientsDrinks(response.drinks);
      }
    }
    getAllIngredients();
  }, [pathname]);

  function showIngredients() {
    const MAX_MEALS = 12;
    if (pathname.includes('/explorar/comidas')) {
      return (
        <section>
          { ingredientsMeals.map(({ strIngredient }, index) => (
            index < MAX_MEALS
            && (
              <button
                key={ index }
                type="button"
                onClick={ () => setRecipeMeal(strIngredient) }
              >
                <IngredientCard
                  name={ strIngredient }
                  index={ index }
                  img={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                />
              </button>
            )
          )) }
        </section>
      );
    }
    if (pathname.includes('/explorar/bebidas')) {
      return (
        <section>
          { ingredientsDrinks.map(({ strIngredient1 }, index) => (
            index < MAX_MEALS
            && (
              <button
                key={ index }
                type="button"
                onClick={ () => setRecipeDrink(strIngredient1) }
              >
                <IngredientCard
                  name={ strIngredient1 }
                  index={ index }
                  img={
                    `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`
                  }
                />
              </button>
            )
          )) }
        </section>
      );
    }
  }

  return (
    <section>
      <Header componentName="Explorar Ingredientes" />
      { validation && showIngredients() }
      <Footer />
    </section>
  );
}

export default ExploreByIngredients;
