import PropTypes from 'prop-types';
import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';

function renderIngredientList(ingredientList) {
  return (
    <ListGroup>
      {ingredientList.map(({ ingredient, index }) => (
        <ListGroup.Item
          data-testid={ `${index}-ingredient-name-and-measure` }
          key={ ingredient }
        >
          {ingredient}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function renderIngredientSteps(ingredientList) {
  return (
    <Form>
      {ingredientList.map(({ ingredient, index }) => (
        <Form.Check
          data-testid={ `${index}-ingredient-step` }
          key={ ingredient }
          type="checkbox"
          id={ ingredient }
          label={ ingredient }
        />
      ))}
    </Form>
  );
}

function Ingredients({ ingredientList, makingRecipe }) {
  return (
    <div>
      <h3>Ingredientes</h3>
      { makingRecipe ? renderIngredientSteps(ingredientList) : renderIngredientList(ingredientList) }
    </div>
  );
}

Ingredients.propTypes = {
  ingredientList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
