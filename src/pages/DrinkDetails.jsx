import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Hero from '../components/DetailsPage/Hero';
import Ingredients from '../components/DetailsPage/Ingredients';
import Instructions from '../components/DetailsPage/Instructions';
import Recommended from '../components/DetailsPage/Recommended';
import RecipesContext from '../context/RecipesContext';
import mapIngredientList from '../helpers/detailsHelper';
import { fetchDrinkById, fetchRecommendedMeals } from '../services/cocktailAPI';

function DrikDetails() {
  const [recipeResponse, setRecipeResponse] = useState({});
  const { drinkId } = useParams();
  const { pathname } = useLocation();
  const { recipes:
     { recommendedFoods, setRecommendedFoods },
  } = useContext(RecipesContext);

  useEffect(() => {
    fetchDrinkById(drinkId).then((recipe) => setRecipeResponse(recipe));
    fetchRecommendedMeals().then((meals) => setRecommendedFoods(meals));
    window.scrollTo(0, 0);
  }, [drinkId, setRecommendedFoods]);

  const recipe = recipeResponse ? recipeResponse[0] : null;
  const ingredientList = mapIngredientList(recipe);
  const { strDrink,
    strCategory, strDrinkThumb,
    strInstructions,
    strYoutube,
    strAlcoholic,
  } = recipe || {};
  console.log(recommendedFoods);
  return (
    <div className="container">
      {recipeResponse[0] && (
        <>
          <Hero
            thumb={ strDrinkThumb }
            alcoholic={ strAlcoholic }
            category={ strCategory }
            title={ strDrink }
          />
          <Ingredients ingredientList={ ingredientList } />
          <Instructions instructions={ strInstructions } />
          <iframe
            width="420"
            height="315"
            src={ strYoutube }
            title={ `${strDrink} Video` }
            data-testid="video"
          />
          <Recommended type="meals" recipes={ recommendedFoods } />
          <Link
            to={ `${pathname}/in-progress` }
            data-testid="start-recipe-btn"
            className="fixed-bottom btn-block pb-3"
          >
            Iniciar Receita
          </Link>
        </>
      )}
    </div>
  );
}

export default DrikDetails;
