import PropTypes from 'prop-types';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Ingredients({ ingredientList }) {
  return (
    <div>
      <h3>Ingredientes</h3>
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
    </div>
  );
}

Ingredients.propTypes = {
  ingredientList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ingredients;
