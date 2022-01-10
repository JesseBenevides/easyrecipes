import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import favoriteWhiteBtnIcon from '../images/whiteHeartIcon.svg';
import favoriteBlackBtnIcon from '../images/blackHeartIcon.svg';
import { getFavoriteRecipes, removeRecipeOnFavorites, saveRecipeOnFavorites } from '../helpers/favoritesHelper';

function FavoriteBtn({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(true);
  const recipeId = recipe.idDrink ? recipe.idDrink : recipe.idMeal;

  useEffect(() => {
    const favoriteRecipes = getFavoriteRecipes();
    const isRecipeFavorite = favoriteRecipes
      .some((favRecipe) => favRecipe.id === recipeId);
    setIsFavorite(isRecipeFavorite);
  }, [isFavorite, recipeId, recipe]);

  return (
    <button
      type="button"
      onClick={ () => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
          removeRecipeOnFavorites(recipeId);
        } else {
          saveRecipeOnFavorites(recipe);
        }
      } }
    >
      <img
        src={ isFavorite ? favoriteBlackBtnIcon : favoriteWhiteBtnIcon }
        alt="Favorite Button"
        data-testid="favorite-btn"
      />
    </button>
  );
}

FavoriteBtn.propTypes = {
  recipe: PropTypes.shape({
    idDrink: PropTypes.any,
    idMeal: PropTypes.any,
  }),
};

export default FavoriteBtn;
