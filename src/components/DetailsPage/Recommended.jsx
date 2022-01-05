import React from 'react';
import RecipeCard from '../RecipeCard';

function Recommended(recipes) {
  return (
    <div>
      <h3>Recomendadas</h3>
      { recipes.map(({ strMeal, strMealThumb, strCategory, idMeal }) => (<RecipeCard
        name={ strMeal }
        image={ strMealThumb }
        category={ strCategory }
        id={ idMeal }
        key={ idMeal }
      />)) }
    </div>
  );
}

export default Recommended;
