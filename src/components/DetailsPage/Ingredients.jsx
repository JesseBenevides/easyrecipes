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
        <div key={ ingredient } data-testid={ `${index}-ingredient-step` }>
          <Form.Check
            type="checkbox"
            name={ ingredient }
            id={ ingredient }
            label={ ingredient }
            value={ ingredient }
          />
        </div>
      ))}
    </Form>
  );
}

function Ingredients({ ingredientList, makingRecipe }) {
  return (
    <div>
      <h3>Ingredientes</h3>
      {makingRecipe
        ? renderIngredientSteps(ingredientList)
        : renderIngredientList(ingredientList)}
    </div>
  );
}

Ingredients.propTypes = {
  ingredientList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Ingredients;
