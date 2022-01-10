import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecipeCard(props) {
  const { name, image, index, id, type } = props;
  return (
    <Link
      to={ `/${type}/${id}` }
      key={ id }
    >
      <Card
        className="mb-4 mr-4"
        id={ id }
        style={ { width: '10rem' } }
        data-testid={ `${index}-recipe-card` }
      >
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
    </Link>
  );
}

RecipeCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default RecipeCard;
