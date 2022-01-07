import React from 'react';
import { Link } from 'react-router-dom';
import { toggleRecipeInProgress } from '../../helpers/inprogressHelper';

function StartRecipeButton({ to, recipeResponse, isInProgress }) {
  return (
    <Link
      to={ `${to}/in-progress` }
      data-testid="start-recipe-btn"
      className="btn btn-primary fixed-bottom btn-block pb-3"
      onClick={ () => toggleRecipeInProgress(recipeResponse, 'cocktails') }
    >
      { isInProgress ? 'Continuar Receita' : 'Iniciar Receita' }
    </Link>
  );
}

export default StartRecipeButton;
