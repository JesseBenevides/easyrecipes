import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoriesFilterButtons from '../components/CategoriesFilterButtons';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import { fetchMealByName, fetchMealsCategories } from '../services/mealAPI';

function Foods() {
  const { recipes: {
    foodList,
    foodCategories,
    setFoodList,
    setFoodCategories,
  } } = useContext(RecipesContext);

  const INICIAL_FOODLIST_LENGTH = 12;
  const INICIAL_FOODCATEGORIES_LENGTH = 5;

  useAPI(fetchMealByName, setFoodList, '', INICIAL_FOODLIST_LENGTH);
  useAPI(fetchMealsCategories, setFoodCategories, '', INICIAL_FOODCATEGORIES_LENGTH);

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

  const renderFoodCategories = () => (
    <CategoriesFilterButtons categoryList={ foodCategories } />
  );

  return (
    <section>
      <h2>Lista de Comidas</h2>
      <Container>
        <Row>
          {renderFoodCategories()}
        </Row>
      </Container>
      <Container>
        <Row>
          { renderFoodCard() }
        </Row>
      </Container>
    </section>
  );
}

export default Foods;
