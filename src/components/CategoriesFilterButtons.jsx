/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Container, Row } from 'react-bootstrap';
import { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';
import { fetchMealsByCategories } from '../services/mealAPI';
import { fetchDrinksByCategories } from '../services/cocktailAPI';

function CategoriesFilterButtons({ categoryList, recipeType }) {
  const { recipes } = useContext(RecipesContext);

  const {
    setFoodList,
    setDrinkList,
  } = recipes;
  async function getRecipesByCategory(categoryName, recipeType ) {
    let recipeList;
    switch(recipeType) {
      case 'food':
         recipeList = await fetchMealsByCategories(categoryName);
         setFoodList(recipeList);
        break;
      
      case 'drink':
        recipeList = await fetchDrinksByCategories(categoryName);
        setDrinkList(recipeList)
        break;
      
      default:
        break;
    }
  }

  function handleClick({ target: { name } }) {
    getRecipesByCategory(name, recipeType)
  }
  return (
    <Container>
      <Row>
        <ButtonGroup aria-label="Basic example">
          <Button
            variant="secondary"
            data-testid="All-category-filter"
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
              onClick={ handleClick }
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
