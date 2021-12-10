import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import { fetchMealByName } from '../services/mealAPI';

function Foods() {
  const { recipes: {
    foodList,
    foodCategories,
    setFoodList,
    setFoodCategories,
  } } = useContext(RecipesContext);

  const INICIAL_FOODLIST_LENGTH = 12;

  useAPI(fetchMealByName, setFoodList, '', INICIAL_FOODLIST_LENGTH);
  const renderFoodCard = () => (
    foodList.map((recipe, index) => (
      <RecipeCard
        key={ `${index}` }
        name={ recipe.strMeal }
        image={ recipe.strMealThumb }
        index={ index }
      />
    ))
  );

  return (
    <section>
      <h2>Lista de Comidas</h2>
      <Container>
        <Row>
          { renderFoodCard() }
        </Row>
      </Container>
    </section>
  );
}

export default Foods;
