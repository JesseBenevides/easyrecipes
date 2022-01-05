import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoriesFilterButtons from '../components/CategoriesFilterButtons';
import RecipeCard from '../components/RecipeCard';
import RecipesContext from '../context/RecipesContext';
import useAPI from '../hooks/useAPI';
import { fetchMealByName, fetchMealsCategories } from '../services/mealAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  const { recipes } = useContext(RecipesContext);

  const {
    foodList,
    foodCategories,
    setFoodList,
    setFoodCategories,
  } = recipes;

  const INICIAL_FOODLIST_LENGTH = 12;
  const INICIAL_FOODCATEGORIES_LENGTH = 5;

  useAPI(fetchMealByName, setFoodList, '', INICIAL_FOODLIST_LENGTH);
  useAPI(fetchMealsCategories, setFoodCategories, '', INICIAL_FOODCATEGORIES_LENGTH);

  const renderFoodCard = () => {
    if (foodList) {
      const list = foodList.slice(0, INICIAL_FOODLIST_LENGTH);
      return (
        list.map((recipe, index) => (
          <RecipeCard
            key={ recipe.idMeal }
            id={ recipe.idMeal }
            name={ recipe.strMeal }
            image={ recipe.strMealThumb }
            index={ index }
            type="comidas"
          />
        ))
      );
    }
  };

  const renderFoodCategories = () => (
    <CategoriesFilterButtons categoryList={ foodCategories } />
  );

  return (
    <>
      <Header pageTitle="Comidas" hasSearch recipeType="food" />
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
      <Footer />
    </>
  );
}

export default Foods;
