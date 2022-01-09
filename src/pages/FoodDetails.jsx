import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import FinishRecipeBtn from '../components/DetailsPage/FinishRecipeBtn';
import Hero from '../components/DetailsPage/Hero';
import Ingredients from '../components/DetailsPage/Ingredients';
import Instructions from '../components/DetailsPage/Instructions';
import Recommended from '../components/DetailsPage/Recommended';
import StartRecipeButton from '../components/DetailsPage/StartRecipeButton';
import RecipesContext from '../context/RecipesContext';
import mapIngredientList from '../helpers/detailsHelper';
import { isRecipeInProgress } from '../helpers/inprogressHelper';
import { fetchMealByID, fetchRecommendedDrinks } from '../services/mealAPI';

function FoodDetails({ makingRecipe }) {
  const [recipeResponse, setRecipeResponse] = useState({});
  const [isFinishButtonDisabled, setIsFinishButtonDisabled] = useState(true);
  const { recipeId } = useParams();
  const { pathname } = useLocation();
  const { recipes:
     { recommendedDrinks, setRecommendedDrinks },
  } = useContext(RecipesContext);
  const isInProgress = isRecipeInProgress(recipeId, 'meals');

  useEffect(() => {
    fetchMealByID(recipeId).then((recipe) => setRecipeResponse(recipe));
    fetchRecommendedDrinks().then((meals) => setRecommendedDrinks(meals));
    window.scrollTo(0, 0);
  }, [recipeId, setRecommendedDrinks]);

  const recipe = recipeResponse ? recipeResponse[0] : null;
  const ingredientList = mapIngredientList(recipe);
  const { strMeal,
    strCategory, strMealThumb,
    strInstructions,
    strYoutube,
  } = recipe || {};

  return (
    <div className="container">
      {recipe && (
        <>
          <Hero thumb={ strMealThumb } category={ strCategory } title={ strMeal } />
          <Ingredients
            ingredientList={ ingredientList }
            makingRecipe={ makingRecipe }
            type="meals"
            recipeId={ recipeId }
            setIsFinishButtonDisabled={ setIsFinishButtonDisabled }
          />
          <Instructions instructions={ strInstructions } />
          { !makingRecipe && <iframe
            width="420"
            height="315"
            src={ strYoutube.replace('watch?v=', 'embed/') }
            title={ `${strMeal} Video` }
            data-testid="video"
          /> }
          { !makingRecipe && <Recommended type="drinks" recipes={ recommendedDrinks } /> }
          { !makingRecipe ? (
            <StartRecipeButton
              to={ pathname }
              isInProgress={ isInProgress }
            />
          ) : <FinishRecipeBtn isFinishButtonDisabled={ isFinishButtonDisabled } /> }
        </>
      )}
    </div>
  );
}

FoodDetails.propTypes = {
  makingRecipe: PropTypes.bool,
};

FoodDetails.defaultProps = {
  makingRecipe: false,
};

export default FoodDetails;
