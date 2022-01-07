import React from 'react';
import { Link } from 'react-router-dom';

function FinishRecipeBtn({ to, toggleRecipeInProgress, recipeResponse }) {
  return (
    <Link
      to={ `${to}/in-progress` }
      data-testid="finish-recipe-btn"
      className="btn btn-primary fixed-bottom btn-block pb-3"
      onClick={ () => toggleRecipeInProgress(recipeResponse, 'cocktails') }
    >
      { 'Finalizar receita' }
    </Link>
  );
}

export default FinishRecipeBtn;
