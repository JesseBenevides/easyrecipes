import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function RecipeCard(props) {
  const { name, image, index } = props;
  return (
    <Card style={ { width: '10rem' } } data-testid={ `${index}-recipe-card` }>
      <Card.Img
        variant="top"
        src={ image }
        data-testid={ `${index}-card-img` }
      />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` }>
          { name }
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default RecipeCard;
