import React from 'react';
import { Carousel } from 'react-bootstrap';
import RecipeCard from '../RecipeCard';
import RecommendationCard from './RecommendationCard';

const MAX_LENGHT = 6;

function Recommended({ recipes }) {
  return (
    <div>
      <h3>Recomendadas</h3>
      <div className="d-flex" style={{ width: '400px', overflowX:"scroll"}}>
        {recipes.length
          && recipes.slice(0, MAX_LENGHT).map((recipe, index) => {
            if (recipe.meals) {
              const { strMeal, strMealThumb, strCategory, idMeal } = recipe;
              return (<RecommendationCard
                name={ strMeal }
                image={ strMealThumb }
                category={ strCategory }
                id={ idMeal }
                key={ idMeal }
                type="comidas"
                index={ index }
              />);
            }

            const { strDrink, strDrinkThumb, strCategory, idDrink } = recipe;
            return (<RecommendationCard
              name={ strDrink }
              image={ strDrinkThumb }
              category={ strCategory }
              id={ idDrink }
              key={ idDrink }
              type="comidas"
              index={ index }
            />);
          })}
      </div>
    </div>
  );
}

export default Recommended;
