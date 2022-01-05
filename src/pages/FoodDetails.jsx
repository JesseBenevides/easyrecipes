import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Hero from '../components/DetailsPage/Hero';
import Ingredients from '../components/DetailsPage/Ingredients';
import Instructions from '../components/DetailsPage/Instructions';
import Recommended from '../components/DetailsPage/Recommended';
import RecipesContext from '../context/RecipesContext';
import mapIngredientList from '../helpers/detailsHelper';
import { fetchMealByID, fetchRecommendedDrinks } from '../services/mealAPI';

function FoodDetails() {
  const [recipeResponse, setRecipeResponse] = useState({});
  const { recipeId } = useParams();
  const { pathname } = useLocation();
  const { recipes:
     { recommendedFoods, setRecommendedFoods },
  } = useContext(RecipesContext);

  useEffect(() => {
    fetchMealByID(recipeId).then((recipe) => setRecipeResponse(recipe));
    fetchRecommendedDrinks().then((meals) => setRecommendedFoods(meals));
    window.scrollTo(0, 0);
  }, [recipeId]);

  const recipe = recipeResponse ? recipeResponse[0] : null;
  const ingredientList = mapIngredientList(recipe);
  const { strMeal,
    strCategory, strMealThumb,
    strInstructions,
    strYoutube,
  } = recipe || {};

  return (
    <div className="container">
      {recipeResponse[0] && (
        <>
          <Hero thumb={ strMealThumb } category={ strCategory } title={ strMeal } />
          <Ingredients ingredientList={ ingredientList } />
          <Instructions instructions={ strInstructions } />
          <iframe
            width="420"
            height="315"
            src={ strYoutube }
            title={ `${strMeal} Video` }
            data-testid="video"
          />
          <Recommended recipes={ recommendedFoods } />
          <Link to={`${pathname}/in-progress`} data-testid="start-recipe-btn" className="fixed-bottom btn-block pb-3">Iniciar Receita</Link>
        </>
      )}
    </div>
  );
}

export default FoodDetails;
