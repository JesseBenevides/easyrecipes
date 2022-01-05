/* eslint-disable indent */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import RecipesContext from '../context/RecipesContext';
import { fetchMealByName, fetchMealsByCategories } from '../services/mealAPI';
import { fetchDrinkByName, fetchDrinksByCategories } from '../services/cocktailAPI';

function CategoriesFilterButtons({ categoryList, recipeType }) {
  const { recipes } = useContext(RecipesContext);

  const {
    setFoodList,
    setDrinkList,
  } = recipes;
  async function getRecipesByCategory(categoryName) {
    let recipeList;
    switch (recipeType) {
    case 'food':
      recipeList = await fetchMealsByCategories(categoryName);
      setFoodList(recipeList);
      break;

    case 'drink':
      recipeList = await fetchDrinksByCategories(categoryName);
      setDrinkList(recipeList);
      break;

    default:
      break;
    }
  }

  async function getAllRecipes(fetchFunction, setState) {
    const recipeList = await fetchFunction('');
    setState(recipeList);
  }

  function handleButtonAllClick() {
    if (recipeType === 'food') getAllRecipes(fetchMealByName, setFoodList);
    else getAllRecipes(fetchDrinkByName, setDrinkList);
  }

  function handleCategoriesButtonClick({ target: { name, classList } }) {
    if (classList.contains('selected')) {
      handleButtonAllClick();
    } else getRecipesByCategory(name);

    classList.toggle('selected');
  }

  return (
    <Container>
      <Row>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            data-testid="All-category-filter"
            onClick={ handleButtonAllClick }
          >
            All
          </Button>
        </ButtonGroup>
        { categoryList.map((category, index) => (
          <ButtonGroup key={ index } aria-label="Basic example">
            <Button
              variant="secondary"
              data-testid={ `${category.strCategory}-category-filter` }
              name={ category.strCategory }
              onClick={ handleCategoriesButtonClick }
            >
              {category.strCategory}
            </Button>
          </ButtonGroup>
        ))}
      </Row>
    </Container>
  );
}

CategoriesFilterButtons.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.any).isRequired,
  recipeType: PropTypes.string.isRequired,
};

export default CategoriesFilterButtons;
